import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks, pageLinks } from './links';
import './_pillar.footer.source.scss';

const Footer = () => (
  <div className="p-footer">
    <div className="p-footer__content">
      <div className="col-3">
        <h4 className="p-footer__section_header">Social</h4>
        <ul className="p-footer__section_list">
          {socialLinks.map(link => (
            <li className="p-footer__section_list_item" key={link.link}>
              <a href={link.link}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-3">
        <h4 className="p-footer__section_header">Pages</h4>
        <ul className="p-footer__section_list">
          {pageLinks.map(link => (
            <li className="p-footer__section_list_item" key={link.link}>
              <Link to={link.link}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Footer;
