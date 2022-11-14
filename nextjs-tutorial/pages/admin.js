import { useRouter } from "next/router";
import Axios from "axios";
import { useEffect } from "react";

export default function Admin() {
  const router = useRouter();
  function checkLogin(){
    Axios.get("/api/isLogin")
    .then((res) => {
      if(res.status === 200 && res.data.name) {
        //로그인
      } else {
        //로그인 안됨
        router.push("/login");
      }
    });
  }  
  
  useEffect(()=> {
     checkLogin(); 
    },[])
  return <>admin</>;
}