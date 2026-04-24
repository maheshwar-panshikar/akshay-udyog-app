import React, { useState } from 'react';
import './add.css';

const Add = ({ config, setConfig }) => {
  const [view, setView] = useState('dashboard');
  const [localConfig, setLocalConfig] = useState(config);

  // --- Main Menu Logic ---
  const addMainMenu = () => {
    setLocalConfig({
      ...localConfig,
      menuItems: [...localConfig.menuItems, { title: '', submenu: [{ name: '', link: '' }] }]
    });
  };

  const removeMainMenu = (index) => {
    const updated = localConfig.menuItems.filter((_, i) => i !== index);
    setLocalConfig({ ...localConfig, menuItems: updated });
  };

  const handleMainMenuChange = (index, value) => {
    const updated = [...localConfig.menuItems];
    updated[index].title = value;
    setLocalConfig({ ...localConfig, menuItems: updated });
  };

  // --- Submenu Logic ---
  const addSubMenu = (menuIndex) => {
    const updated = [...localConfig.menuItems];
    updated[menuIndex].submenu.push({ name: '', link: '' });
    setLocalConfig({ ...localConfig, menuItems: updated });
  };

  const removeSubMenu = (menuIndex, subIndex) => {
    const updated = [...localConfig.menuItems];
    updated[menuIndex].submenu = updated[menuIndex].submenu.filter((_, i) => i !== subIndex);
    setLocalConfig({ ...localConfig, menuItems: updated });
  };

  const handleSubMenuChange = (menuIndex, subIndex, field, value) => {
    const updated = [...localConfig.menuItems];
    updated[menuIndex].submenu[subIndex][field] = value;
    setLocalConfig({ ...localConfig, menuItems: updated });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setConfig(localConfig);
    alert("Configuration Published!");
    setView('dashboard');
  };

  return (
    <div className="add-page-container">
      {view === 'dashboard' ? (
        <div className="dashboard-menu">
          <h1>Admin Dashboard</h1>
          <button className="admin-card" onClick={() => setView('header')}>
            <span>🍱</span> Configure Website Header
          </button>
        </div>
      ) : (
        <div className="form-card">
          <span className="back-link" onClick={() => setView('dashboard')}>← Back</span>
          <h2>Header Settings</h2>
          
          <form onSubmit={handleSave}>
            <div className="form-group">
              <label>Website Title</label>
              <input 
                type="text" 
                value={localConfig.title} 
                onChange={(e) => setLocalConfig({...localConfig, title: e.target.value})} 
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Logo URL</label>
                <input 
                  type="text" 
                  value={localConfig.logoUrl} 
                  onChange={(e) => setLocalConfig({...localConfig, logoUrl: e.target.value})} 
                />
              </div>
              <div className="form-group">
                <label>Alt Text</label>
                <input 
                  type="text" 
                  value={localConfig.altText} 
                  onChange={(e) => setLocalConfig({...localConfig, altText: e.target.value})} 
                />
              </div>
            </div>

            <div className="form-group">
              <label>Menu Structure</label>
              {localConfig.menuItems.map((menu, mIdx) => (
                <div key={mIdx} className="multifield-box">
                  <div className="multifield-header">
                    <input 
                      placeholder="Main Menu Title" 
                      value={menu.title}
                      onChange={(e) => handleMainMenuChange(mIdx, e.target.value)}
                    />
                    <button type="button" className="btn-remove" onClick={() => removeMainMenu(mIdx)}>Remove Menu</button>
                  </div>
                  
                  <div className="submenu-container">
                    {menu.submenu.map((sub, sIdx) => (
                      <div key={sIdx} className="submenu-row">
                        <input 
                          placeholder="Link Name" 
                          value={sub.name}
                          onChange={(e) => handleSubMenuChange(mIdx, sIdx, 'name', e.target.value)}
                        />
                        <input 
                          placeholder="URL" 
                          value={sub.link}
                          onChange={(e) => handleSubMenuChange(mIdx, sIdx, 'link', e.target.value)}
                        />
                        <button type="button" className="btn-remove-sub" onClick={() => removeSubMenu(mIdx, sIdx)}>×</button>
                      </div>
                    ))}
                    <button type="button" className="btn-add-sub" onClick={() => addSubMenu(mIdx)}>+ Add Submenu Item</button>
                  </div>
                </div>
              ))}
              <button type="button" className="btn-add-main" onClick={addMainMenu}>+ Add New Category</button>
            </div>

            <div className="form-group">
              <label>Contact Details</label>
              <textarea 
                rows="3" 
                value={localConfig.contactDetails}
                onChange={(e) => setLocalConfig({...localConfig, contactDetails: e.target.value})}
              />
            </div>

            <button type="submit" className="btn-submit">Publish Changes</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Add;