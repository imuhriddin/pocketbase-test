import { Breadcrumb } from 'antd';
import React, { useState } from 'react'
import BreadCrumbs from './BreadCrumbs';
import NewRecordDrawer from './NewRecordDrawer';

function Header() {

  const [newRecordOpen, setNewRecordOpen] = useState(false)
  return (
    <div className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center space-x-2">
        <BreadCrumbs/>
      </div>

      <div className="flex items-center space-x-3">
        <button className="flex cursor-pointer items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none  ">
          {/* API Preview icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <span className="text-sm font-medium text-gray-700">API Preview</span>
        </button>
        <button onClick={() => setNewRecordOpen(true)} className="flex cursor-pointer items-center px-4 py-2 bg-gray-900 text-white rounded-md shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 ">
          {/* Plus icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <span className="text-sm font-medium">New record</span>
        </button>
      </div>

      <NewRecordDrawer open={newRecordOpen} onClose={() => setNewRecordOpen(false)} />
    </div>
  );
}

export default Header