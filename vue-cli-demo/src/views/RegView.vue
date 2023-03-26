<template>
    <div class="sign">
        <div class="logo">
            <a href="/"><img src="../assets/5.png" alt="logo"></a>
        </div>
        <div class="sign-container">
            <div class="download-content">
                <a href="https://www.jianshu.com/apps? utm_medium=desktop&utm_source=sign_in_page_click" class="download-btn">下载简书App</a>
                <div class="download-qrcode">
                    <div class="download-qrcode-big"></div>
                    <div class="download-qrcode-icon"></div>
                </div>
            </div>
            <div class="main">
                <h4 class="title">
                    <div class="normal-title">
                        <a href="/login" class="active">登录</a>
                        <b>·</b>
                        <a class="sign-btn"  href="/reg">注册</a>
                    </div>
                </h4>
                <div class="js-sign-in-container">
                    <form id="new_session" action="/session" accept-charset="UTF-8" method="post">
                        <div class="input-prepend">
                            <img class="ic-user" src="../assets/个人.png" alt="">
                            <input class="t1"  placeholder="你的昵称" type="text">
                        </div>
                        <div class="input-prepend1">
                            <img class="ic-user" src="../assets/手机号.png" alt="">
                            <input  class="t1"  placeholder="手机号" type="password">
                        </div>
                        <div class="input-prepend1">
                            <img class="ic-user" src="../assets/密码.png" alt="">
                            <input  class="t1"  placeholder="设置密码" type="password">
                        </div>
                        <!-- <div class="footer-btn">
                            <div class="remeber-btn">
                                <input type="checkbox" value="true" checked="checked">
                                <spn>记住我</spn>
                            </div>
                            <div class="forget-btn">
                                <a>登录遇到问题？</a>
                            </div>
                        </div> -->
                        <button class="sign-button" type="button" >
                           <a href="/login">注册</a>
                        </button>
                        <div>
                            <p>点击 “注册” 即表示您同意并愿意遵守简书</p>
                            <a target="_blank" href="/">用户协议</a> 和 <a target="_blank" href="/">隐私政策</a>
                        </div>
                    </form>
                    <div>
                        <img src="../assets/9.png" class="footer-img">
                    </div>
                </div>
            </div>
        </div>
        <!-- <h2>登录页面</h2>
        <RouterLink to="/">去主页</RouterLink>
        <RouterLink to="/reg">没有账号，去注册</RouterLink> -->
    </div>
</template>

<script setup>

</script>

<style scoped>
*{
    box-sizing: border-box;
}
.sign{
    text-align: center;
    font-size: 14px;
    min-width: 900px;
    height: 100vh;
    background-color: #f1f1f1;
    position: relative;
    display: flex;

}
.sign .logo img{
    margin-top: 40px;
    margin-left: 40px;
    width: 100px;
}
img{
    vertical-align: middle;
}
.sign .sign-container{
    width: 820px;
    height: 600px;
    margin: 0 auto;
    background-image: url('../assets/6.png');
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: 45px 0;
    position: relative;
}
.sign .sign-container .download-content{
    display: flex;
    align-items: center;
    position: absolute;
    left: 60px;
    top: 452px;
}
.sign .sign-container .download-content .download-btn{
    display: block;
    width: 252px;
    height: 46px;
    margin-right: 15px;
    background-color: #ea6f5a;
    border-radius: 30px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    line-height: 46px;
    cursor: pointer;
    text-decoration: none;

}
.sign .sign-container .download-content .download-qrcode{
    width: 46px;
    height: 46px;
    position: relative;
    border-radius: 5px;
    background-image: url('../assets/7.png');
    background-size: 38px;
    background-repeat: no-repeat;
    background-color: #fff;
    background-position: 4px 4px;
    cursor: pointer;
}
.sign .main{
    width: 400px;
    margin: 0 auto;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 1) ;
    vertical-align: middle;
    display:inline-block;
    margin-left: 425px;
}
h4{
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.sign form{
    display: block;
    margin-bottom: 30px;
    margin: 0 0 20px;
}
.ic-user{
    width: 25px;
    height: 25px;
    margin-right: 8px;
}
.input-prepend{
    height: 50px;
    border: 1px solid #cccbcb;
    background-color: #d7d7d7;
    border-radius: 5px 5px 0 0;
}
.input-prepend1{
    height: 50px;
    border: 1px solid #fff;
    background-color: #d7d7d7;
    border-radius: 0 0 5px 5px;
}
.t1{
    width: 240px;
    height:40px;
    border: 0px;
    outline:none;
    background-color: #d7d7d7;
}
.normal-title{
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}
.active{
    font-size: 20px;
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
}
.sign-btn{
    font-size: 20px;
    font-weight: 700;
    color: #848383;
}
.footer-btn{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.sign-button{
    width: 300px;
    height: 40px;
    border-radius: 50px;
    margin-top: 20px;
    /* font-size: 18px; */
    color: #fff;
    background-color: #42c02e;
    box-shadow: 0px 0px 2px  #42c02e;
    border: #42c02e;
}
.sign-button a{
    font-size: 18px;
    color: #fff;
    text-decoration: none;
}
.footer-img{
    margin: 0 auto;
    width: 320px;
    height: 100px;
    background-size: 300px 300px;
}
</style>