import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { Tab, TabList, TabPanel, TabPanels, Tabs as ReachTabs } from '@reach/tabs'

import styles from './styles.module.scss'
import "@reach/tabs/styles.css";

const Tabs = ({ dataTabs, tabClassName, panelClassName }) => {
  return (
    <ReachTabs className={styles['tabs-container']}>
        <TabList className={styles['tabs-list-container']}>
          {dataTabs.map(element => (
            <Tab key={element.label} className={classnames(styles.tab, tabClassName)}>
               <p>{element.label}</p>
            </Tab>
          ))}
        </TabList>

        <TabPanels className={styles['tab-panels']}>
          {dataTabs.map(element => (
            <TabPanel key={element.label} className={classnames(styles['item-panel'], panelClassName)}>
              {element.component}
            </TabPanel>
          ))}
        </TabPanels>
    </ReachTabs>
  )
}

Tabs.propTypes = {
  dataTabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      component: PropTypes.node
    })
  ).isRequired,
  tabClassName: PropTypes.string,
  panelClassName: PropTypes.string,
}

Tabs.defaultProps = {
  tabClassName: '',
  panelClassName: '',
}

export default Tabs
