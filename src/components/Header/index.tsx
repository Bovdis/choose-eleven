import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.scss';
import { routes } from '../../layout';

const Header = () => {
  return (
    <div className={styles.navigation}>
      <ul className={styles.navigationList}>
        <li className={styles.listElement}>
          {routes.map(route => {
            return <Link className={styles.link} to={route.path} key={route.path}>{route.name}</Link>
          })}
        </li>
      </ul>
    </div>
  )
}

export default Header;
