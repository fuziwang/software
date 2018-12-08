import { Http,Headers,Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiProvider {
  //定义post请求需要的头部
  public headers=new Headers({'Content-Type':'application/json'});
  constructor(public http: Http) {
    console.log('Hello ApiProvider Provider');
  }

  url:string = "/web/";
  //实例get请求
  public getList(){
    return new Promise((resolve, reject) => {
      this.http.get(this.url+"photos")
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
      });
    });
  }
  
  //实例post请求
  public postData(data){
    return new Promise((resolve, reject) => {
      this.http.post('https://jsonplaceholder.typicode.com/posts',data,{headers:this.headers})
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err)
          reject()
        });
    });
  }

}
