practice002
======

###練習從遠端取得資料

####TODO:
1. 加入取得遠端資料的方法 到 actions  (引入axios套件 輕量request)
2. 在wrap.jsx在render之前去要資料
    - import { bindActionCreators } from 'redux';
    - import { getProduct } from '../actions/AppAction.js';
3. 修改reducer 根據actions做完的事情回傳

###Questions:
1. Actions must be plain objects. Use custom middleware for async actions.
    - 修改create store的邏輯 加入thunk
