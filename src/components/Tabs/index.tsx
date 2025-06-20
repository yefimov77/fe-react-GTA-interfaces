// import type { FC } from 'react';

// import styles from './Rules.module.scss';
// export const Rules: FC = () => {
//   return <div className={styles.content}>hello </div>;
// };
import React, { useMemo, useState } from 'react';

type TabData = {
  id: string;
  title: string;
  content: string;
  accessLvl: number;
};

interface SearchTabsProps {
  tabs: TabData[];
  currentAccessLevel: number;
}

export const SearchTabs: React.FC<SearchTabsProps> = ({
  tabs,
  currentAccessLevel,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTabId, setActiveTabId] = useState<string | null>(null);

  // Filter tabs based on search & access rules
  const filteredTabs = useMemo(() => {
    const q = searchQuery.toLowerCase();

    return tabs.filter((tab) => {
      const canAccess = tab.accessLvl <= currentAccessLevel;

      if (!canAccess) {
        // Always show disabled tabs, but don't search their content
        return true;
      }

      // For enabled tabs, search title and content
      const titleMatch = tab.title.toLowerCase().includes(q);
      const contentMatch = tab.content.toLowerCase().includes(q);

      return titleMatch || contentMatch;
    });
  }, [tabs, searchQuery, currentAccessLevel]);

  // If active tab is filtered out, reset active tab
  React.useEffect(() => {
    if (activeTabId && !filteredTabs.find((t) => t.id === activeTabId)) {
      setActiveTabId(null);
    }
  }, [filteredTabs, activeTabId]);

  // If no active tab, set to first accessible tab
  React.useEffect(() => {
    if (!activeTabId) {
      const firstAccessible = filteredTabs.find(
        (tab) => tab.accessLvl <= currentAccessLevel,
      );
      if (firstAccessible) {
        setActiveTabId(firstAccessible.id);
      }
    }
  }, [filteredTabs, activeTabId, currentAccessLevel]);

  return (
    <div>
      <input
        type="search"
        placeholder="Search tabs..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '12px' }}
      />

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {filteredTabs.map((tab) => {
          const disabled = tab.accessLvl > currentAccessLevel;
          const active = tab.id === activeTabId;

          return (
            <button
              key={tab.id}
              onClick={() => !disabled && setActiveTabId(tab.id)}
              disabled={disabled}
              style={{
                padding: '8px 16px',
                cursor: disabled ? 'not-allowed' : 'pointer',
                opacity: disabled ? 0.5 : 1,
                borderBottom: active
                  ? '3px solid teal'
                  : '3px solid transparent',
                backgroundColor: active ? '#e0f0f0' : '#fff',
              }}
              title={disabled ? 'Access Denied' : undefined}
            >
              {tab.title} {disabled && '🔒'}
            </button>
          );
        })}
      </div>

      <div style={{ marginTop: '24px', minHeight: '100px' }}>
        {activeTabId ? (
          tabs.find(
            (t) => t.id === activeTabId && t.accessLvl <= currentAccessLevel,
          )?.content || <em>Access denied for this tab content.</em>
        ) : (
          <em>No tab selected</em>
        )}
      </div>
    </div>
  );
};
