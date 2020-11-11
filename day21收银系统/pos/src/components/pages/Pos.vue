<template>
  <div class="pos">
    <dir>
      <el-row>
        <el-col :span="8" :offset="0">
          <el-tabs>
            <el-tab-pane label="点餐">
              <el-table :data="tableData" border stripe style="width:100%">
                <el-table-column prop="goodsName" label="商品"></el-table-column>
                <el-table-column prop="count" label="数量" width="50"></el-table-column>
                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                <el-table-column label="操作" width="100" fixed="right">
                  <template scope="scope">
                    <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
                    <el-button type="text" size="small" @click="add(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div style="height:100px;">
                <span>商品总数:{{allnumber}}</span>
                <span style="margin-left:20px;">总价:{{allmoney}}元</span>
              </div>
              <div class="do">
                <el-button type="warning" size="default">挂单</el-button>
                <el-button type="danger" size="default" @click="delAll()">删除</el-button>
                <el-button type="success" size="default" @click="jiezhang()">结账</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单">挂单</el-tab-pane>
            <el-tab-pane label="外卖">外卖</el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="16" :offset="0">
          <div class="often-goods">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul>
                <li @click="addToList(item)" v-for="item in oftenGoods" v-bind:key="item.goodsId">
                  <span>{{item.goodsName}}</span>
                  <span class="o-price">￥{{item.price}}</span>
                </li>
              </ul>
            </div>
            <div class="goods-type">
              <el-tabs>
                <el-tab-pane label="汉堡">
                  <ul class="cookList">
                    <li
                      @click="addToList(item)"
                      v-for="item in type0Goods"
                      v-bind:key="item.goodsId"
                    >
                      <span class="foodImg">
                        <img
                          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2005739391,4179917278&fm=26&gp=0.jpg"
                          width="100%"
                        />
                      </span>
                      <span class="foodName">{{item.goodsName}}</span>
                      <span class="foodPrice">￥{{item.price}}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="小食">
                  <ul class="cookList">
                    <li
                      @click="addToList(item)"
                      v-for="item in type1Goods"
                      v-bind:key="item.goodsId"
                    >
                      <span class="foodImg">
                        <img
                          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2005739391,4179917278&fm=26&gp=0.jpg"
                          width="100%"
                        />
                      </span>
                      <span class="foodName">{{item.goodsName}}</span>
                      <span class="foodPrice">￥{{item.price}}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="饮料">
                  <ul class="cookList">
                    <li
                      @click="addToList(item)"
                      v-for="item in type2Goods"
                      v-bind:key="item.goodsId"
                    >
                      <span class="foodImg">
                        <img
                          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2005739391,4179917278&fm=26&gp=0.jpg"
                          width="100%"
                        />
                      </span>
                      <span class="foodName">{{item.goodsName}}</span>
                      <span class="foodPrice">￥{{item.price}}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
                <el-tab-pane label="套餐">
                  <ul class="cookList">
                    <li
                      @click="addToList(item)"
                      v-for="item in type3Goods"
                      v-bind:key="item.goodsId"
                    >
                      <span class="foodImg">
                        <img
                          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2005739391,4179917278&fm=26&gp=0.jpg"
                          width="100%"
                        />
                      </span>
                      <span class="foodName">{{item.goodsName}}</span>
                      <span class="foodPrice">￥{{item.price}}元</span>
                    </li>
                  </ul>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </el-col>
      </el-row>
    </dir>
  </div>
</template>

<script>
import axios from "axios";
import urls from "../../utils/apiconfig";

export default {
  name: "pos",
  props: {
    msg: String
  },
  data() {
    return {
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: []
    };
  },
  created() {
    axios.get(urls.oftenurl).then(res => {
      this.oftenGoods = res.data;
    });
    axios.get(urls.typefoods).then(res => {
      this.type0Goods = res.data[0];
      this.type1Goods = res.data[1];
      this.type2Goods = res.data[2];
      this.type3Goods = res.data[3];
    });
  },
  methods: {
    addToList(good) {
      let item = good;
      let isHava = false; //判断是否存在
      for (let i = 0; i < this.tableData.length; i++) {
        if (item.goodsId === this.tableData[i].goodsId) {
          isHava = true;
        }
      }
      if (isHava) {
        //存在的匹配上就+1
        let arr = this.tableData.filter(o => item.goodsId === o.goodsId);
        arr[0].count++;
      } else {
        //不存在就创建新的对象，加入到数组中
        let newGoods = {
          goodsId: good.goodsId,
          goodsName: good.goodsName,
          price: good.price,
          count: 1
        };
        this.tableData.push(newGoods);
      }
    },
    add(ittm) {
      for (var i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId === ittm.goodsId) {
          this.tableData[i].count++;
        }
      }
    },
    del(ittm){
      // 这个是每一行的数量的变化
      //  for (var i = 0; i < this.tableData.length; i++) {
      //   if (this.tableData[i].goodsId === ittm.goodsId) {
      //     if(this.tableData[i].count!==0)
      //     this.tableData[i].count--;
      //   }
      // }
      
      //这个删除每一行
      this.tableData=this.tableData.filter((item)=>{
         return item.goodsId!==ittm.goodsId
      });
    },
    delAll(){
      this.tableData=[]
    },
    jiezhang(){
      if(this.allmoney===0){
        this.$notify({
          title: '温馨提示',
          message: '购物车为空',
          type: 'warning',
          duration: '4500',
          position: 'top-right',
          showClose: 'true',
        });
        
        
      }else{
        this.$notify.success({
          title: '温馨提示',
          message: '温馨提示成功,付款'+this.allmoney+"元",
          duration: '4500',
          position: 'top-right',
          showClose: 'true',
        });
        
      }
    }
  },
  computed: {
    allmoney() {
      let all = 0;
      for (let item of this.tableData) {
        all += item.price * item.count;
      }
      return all;
    },
    allnumber() {
      let all = 0;
      for (let item of this.tableData) {
        all += item.count;
      }
      return all;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pos {
  box-sizing: border-box;
}
.do {
  margin: 30px;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 20px;
  margin: 20px;
}
/* 浮动引起高度塌陷 */
.often-goods-list {
  margin-left: 100px;
}
.often-goods-list ul {
  overflow: hidden;
}
.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
}
.o-price {
  color: #58b7ff;
}
.goods-type {
  padding: 20px;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 10px;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
