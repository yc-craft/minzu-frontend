// @ts-ignore
/* eslint-disable */
import request from '@/plugins/globalRequest';

/** 获取当前的用户 GET /api/user/current */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('/api/user/current', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/user/logout */
export async function outLogin(options?: { [key: string]: any }) {
  return request<API.BaseResponse<number>>('/api/user/logout', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/user/login */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.LoginResult>>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册接口 POST /api/user/register */
export async function register(body: API.RegisterParams, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.RegisterResult>>('/api/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 注册时验证码发送 POST /api/user/registerMail */
export async function registerMail(email: string, options?: { [p: string]: any }) {
  console.log(email);
  return request<API.BaseResponse<API.RegisterMailResult>>('/api/user/registerMail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {"email" : email},
    ...(options || {}),
  });
}


/** 搜索用户 GET /api/user/search */
export async function searchUsers(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser[]>>('/api/user/search', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 搜索用户 POST /api/user/searchByOne */
export async function searchUsersByOne(body: API.CurrentUser,options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser[]>>('/api/user/searchByOne', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新用户 POST /api/user/save */
export async function saveUser(body: API.CurrentUser, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('/api/user/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除用户 POST /api/user/delete */
export async function deleteUser(body: API.CurrentUser, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentUser>>('/api/user/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}


/** 搜索民族 全部 GET /api/minzu/search */
export async function searchMinzu(options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentMinzu[]>>('/api/minzu/search', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 搜索民族 byname POST /api/minzu/searchByName */
export async function searchMinzuByName(param: string,options?: { [key: string]: any }) {
  alert(param);
  return request<API.BaseResponse<API.CurrentMinzu[]>>('/api/minzu/searchByName', {
    method: 'POST',
    data : {"minzuName": param},
    ...(options || {}),
  });
}

/** 搜索民族 byType POST /api/minzu/searchByType */
export async function searchMinzuBy(body: API.dataMinzuParams,options?: { [key: string]: any })  {
  return request<API.BaseResponse<API.CurrentMinzu[]>>('/api/minzu/searchBy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data:body,
    ...(options || {}),
  });
}

/** 搜索民族 byOne POST /api/minzu/searchByType */
export async function searchMinzuByOne(body: API.dataMinzuParam,options?: { [key: string]: any })  {
  return request<API.BaseResponse<API.CurrentMinzu[]>>('/api/minzu/searchByOne', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data:body,
    ...(options || {}),
  });
}


/** 更新民族 POST /api/minzu/save */
export async function saveMinzu(body: API.CurrentMinzu, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentMinzu>>('/api/minzu/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 删除民族 POST /api/minzu/delete */
export async function deleteMinzu(body: API.CurrentMinzu, options?: { [key: string]: any }) {
  return request<API.BaseResponse<API.CurrentMinzu>>('/api/minzu/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}



/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
