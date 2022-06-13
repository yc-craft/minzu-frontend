import React, {useRef, useState} from 'react';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import {
  deleteMinzu,
  deleteUser, saveMinzu,
  saveUser,
  searchMinzu,
  searchMinzuBy, searchMinzuByOne,
  searchUsers
} from "@/services/ant-design-pro/api";
import {Card, Col, Form, Image, message, Row, Select} from "antd";



const columns: ProColumns<API.CurrentMinzu>[] = [
  {
    dataIndex: 'id',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '影音',
    dataIndex: 'minzuUrl',
    hideInSearch: true,
/*    render: (_, record) => (
      <div>
        <Image src={record.minzuUrl} width={100} />
      </div>
    ),*/

    render (_, record) {
      if(record.minzuSource == 0){
        return (<div><Image src={record.minzuUrl} width={300} /></div>  )
      }
      else if (record.minzuSource == 2){
        return ( <div><video controls src={record.minzuUrl}  width={300} /></div>)
        //  return ( <div><video controls src={"http://124.221.66.151:8083/source/白族/2.mp4"} width={300} /></div>)
         //return ( <div><video controls src={require('../../../../public/source/白族/白族mp4（31）.qsv').default} width={300} /></div>)
        // return ( <div><video controls src={"../../../source/白族/2.mp4"} width={300} /></div>)
      }
      else{
        return ( <div><audio controls src={record.minzuUrl} /></div>)
      }
    }
  },
  {
    title: '民族',
    dataIndex: 'minzuType',
    copyable: true,
  },
  {
    title: '资源名',
    dataIndex: 'minzuName',
    copyable: true,
  },
  {
    title: '类型',
    dataIndex: 'minzuSource',
    copyable: true,
    valueType: 'select',
    valueEnum: {
      0: { text: '图片'},
      1: {text: '音频'},
      2: {text: '视频'},
      3: {text: '不限'},
    },
    editable: false,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    valueType: 'dateTime',
    hideInSearch: true,
    editable: false,
  },
  {
    title: '操作',
    valueType: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.minzuUrl} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();

 /* const [isShowDetail,setIsShowDetail] = useState(false);
  const [CurrentMinzu,setCurrentMinzu] = useState({} as API.CurrentMinzu);*/

  return (
    <ProTable<API.CurrentMinzu>
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params = {}, sort, filter) => {
        console.log(params);
        const param: API.dataMinzuParam = {
          minzuName: params.minzuName,
          minzuType : params.minzuType,
          minzuSource : params.minzuSource,
        }
        const minzuList = await searchMinzuByOne(param);
        return {
          data: minzuList
        }
      }}
      editable={{ type: 'multiple',
        onSave:async (id,row: API.CurrentMinzu)=>{
          const b = await saveMinzu(row);
          if (b){
            const defaultSaveSuccessMessage = '修改成功！';
            message.success(defaultSaveSuccessMessage);
          }
          else{
            const defaultSaveFalseMessage = '修改失败！';
            message.error(defaultSaveFalseMessage);
          }
        },
        onDelete:async (id,row: API.CurrentMinzu)=>{
          const b = await deleteMinzu(row);
          if (b){
            const defaultDeleteSuccessMessage = '删除成功！';
            message.success(defaultDeleteSuccessMessage);
          }
          else{
            const defaultDeleteFalseMessage = '删除失败！';
            message.error(defaultDeleteFalseMessage);
          }
        },
      }}

      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 5,
      }}
      dateFormatter="string"
      headerTitle="民族库表格"
    />
  );
};
