import { DashboardFilled, FileTextFilled, HighlightFilled, ProductFilled } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const AdminSidebar = () => {
  type MenuItem = Required<MenuProps>['items'][number];
  const navigate = useNavigate()
  const items: MenuItem[] = [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: <DashboardFilled />,
    },
    {
      key: 'productmanage',
      label: 'Quản lý sản phẩm',
      icon: <ProductFilled />,
      children: [
        { key: `list`, label: 'Danh sách sản phẩm' },
        { key: 'add', label: 'Thêm sản phẩm' }
      ],
    },
    {
      key: 'variant',
      label: 'Quản lý thuộc tính',
      icon: <HighlightFilled />,
      children: [
        { key: 'list-category', label: 'Thuộc tính' },
        { key: 'add-category', label: 'Thêm thuộc tính' },
      ],
    },
    {
      key: 'report',
      label: 'Thống kê',
      icon: <FileTextFilled />,
    },
  ];
  const onClick: MenuProps['onClick'] = ({key}) => {
      switch(key){
        case 'admin':
      navigate('/');
      break;
    case 'list':
      navigate('/phone/list');
      break;
    case 'add':
      navigate('/phone/add');
      break;
    case 'statistics':
      navigate('/phone/statistics');
      break;
    default:
      break;
      };
      switch(key){
        case 'category':
      navigate('/');
      break;
    case 'list-category':
      navigate('/category/phone/list');
      break;
    case 'add-category':
      navigate('/category/phone/add');
      break;
    default:
      break;
      }
  };
  return (
    <div className='w-1/5 h-screen bg-white'>
      <Menu
      onClick={onClick}
      style={{ width: '100%' }}
      defaultSelectedKeys={['dashboard']}
      mode="inline"
      items={items}
    />
    </div>
  )
}

export default AdminSidebar