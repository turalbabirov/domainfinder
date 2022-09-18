import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
import './SearchingBox.scss';

const menu = (
   <Menu
      items={[
         {
            label: (
               <span>
                  Only domain <input type="checkbox" />
               </span>
            ),
            key: '0',
         },
         {
            label: (
               <span>
                  Other options <input type="checkbox" />
               </span>
            ),
            key: '1',
         },
      ]}
   />
);

function SearchingBox() {
   return (
      <div className="search">
         <div className="select">
            <Dropdown overlay={menu} trigger={['click']}>
               <a href="htt" onClick={(e) => e.preventDefault()}>
                  <Space>
                     <b>Resources</b>
                     <DownOutlined />
                  </Space>
               </a>
            </Dropdown>
         </div>

         <div className="searchbox">
            <input
               type="search"
               name=""
               id=""
               placeholder="Search something..."
               spellcheck="false"
            />
            <div>
               <a href={'https://google.com'} className="closebtn">
                  <i class="fa-solid fa-xmark"></i>
               </a>

               <a href={'/search'} className="searchbtn">
                  <i class="fa-solid fa-magnifying-glass"></i>
               </a>
            </div>
         </div>
      </div>
   );
}

export default SearchingBox;
