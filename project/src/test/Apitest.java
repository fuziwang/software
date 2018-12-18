package pleasing_growth;

import static org.testng.Assert.assertEquals;

import org.testng.annotations.Test;

import com.edu.core.HttpDriver;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

public class Apitest {
	// 数组转换成json格式
	public String change(String id) {
		String result1 = id.replace("[", "");
		String result2 = result1.replace("]", "");
		return result2;
	}

	// ------1.1获得用户发布的文章
	@Test
	public void user_article_test() throws Exception {
		String article_id = HttpDriver.doGet("http://192.168.204.144:3000/api/user/myarticle/2");
		String article = this.change(article_id);
		System.out.println(article);
		JSONObject json = JSONObject.fromObject(article);
		assertEquals(json.getString("aid"), "2");
	}

	// --------1.2获得用户发布的说说
	@Test
	public void user_say_test() throws Exception {
		String say_id = HttpDriver.doGet("http://192.168.204.144:3000/api/user/mysay/1");
		String say = this.change(say_id);
		System.out.println(say);
		JSONObject json = JSONObject.fromObject(say);
		assertEquals(json.getString("sid"), "1");
	}

	// -------1.3获得用户对应的兴趣话题
	@Test
	public void user_myhobby_test() throws Exception {
		String myhobby_id = HttpDriver.doGet("http://192.168.204.144:3000/api/user/myhobby/1");
		String myhobby = this.change(myhobby_id);
		System.out.println(myhobby);
		JSONObject json = JSONObject.fromObject(myhobby);
		assertEquals(json.getString("uid"), "1");
	}

	// ---------1.4获取用户信息
	@Test
	public void user_test() throws Exception {
		String user_id = HttpDriver.doGet("http://192.168.204.144:3000/api/user/1");
		String user = this.change(user_id);
		System.out.println(user);
		JSONObject json = JSONObject.fromObject(user);
		assertEquals(json.getString("uid"), "1");
	}

	// ---------1.5获取用户关注信息
	@Test
	public void user_myconcern_test() throws Exception {
		String myconcern_id = HttpDriver.doGet("http://192.168.204.144:3000/api/user/myconcern/1");
		String concern = this.change(myconcern_id);
		System.out.println(concern);
		JSONObject json = JSONObject.fromObject(concern);
		assertEquals(json.getString("uid"), "1");
	}

	// ---------1.6获取用户粉丝信息
	@Test
	public void user_myfans_test() throws Exception {
		String myfans_id = HttpDriver.doGet("http://192.168.204.144:3000/api/user/myfans/1");
		String myfans = this.change(myfans_id);
		System.out.println(myfans);
		JSONObject json = JSONObject.fromObject(myfans);
		assertEquals(json.getString("uid"), "6");
	}

	// ---------1.7---------post注册
	// @Test
	// public void reg_test() {
	//
	// JSONObject user = new JSONObject();
	// user.element("Uid ", "1");
	// user.element("Utel ", "15076385427");
	// user.element("Upass ", "34567");
	// String result = HttpDriver.doPost("http://192.168.204.144:3000/api/user/reg",
	// user);
	// String myfans=this.change(result);
	// System.out.println(result);
	// // JSONObject json=JSONObject.fromObject(result);
	// // assertEquals(json.getString("message"), "success");
	// }

	// ---------1.8(返回--[])登录
	@Test
	public void login_test() {
		JSONObject user = new JSONObject();
		user.element("Utel ", "15076385427");
		user.element("Upass ", "34567");
		String result = HttpDriver.doPost("http://192.168.204.144:3000/api/user/login", user);
		String login = this.change(result);
		System.out.println(login);
	}

	// ---------1.9忘记密码
	@Test
	public void forget_test() {
		JSONObject user = new JSONObject();
		user.element("Utel ", "15076385427");
		user.element("Upass ", "34567");
		String result = HttpDriver.doPost("http://192.168.204.144:3000/api/user/forget", user);
		String forget = this.change(result);
		System.out.println(forget);
		assertEquals(forget, "ok");
	}

	// ---------1.10更换头像
	// @Test
	// public void user_image_test() {
	// JSONObject user = new JSONObject();
	// user.element("Uid ", "1");
	// user.element("Uimage ", "www-1.png");
	// String result =
	// HttpDriver.doPost("http://192.168.204.144:3000/api/user/image", user);
	// String login=this.change(result);
	// System.out.println(login);
	//// assertEquals(login, "ok");
	// }

	// ----------2.1获取所有文章信息
	@Test
	public void article_test1() throws Exception {
		String article_id = HttpDriver.doGet("http://192.168.204.144:3000/api/article");
		String article = this.change(article_id);
		System.out.println(article);
		JSONObject json = JSONObject.fromObject(article);
		assertEquals(json.getString("aid"), "2");
	}

	// ----------2.2获得文章详细信息
	@Test
	public void article_test2() throws Exception {
		String article_id = HttpDriver.doGet("http://192.168.204.144:3000/api/article/2");
		String article = this.change(article_id);
		System.out.println(article);
		JSONObject json = JSONObject.fromObject(article);
		assertEquals(json.getString("aid"), "2");
	}

	// -----------2.3上传文章
	// @Test
	// public void article_test3() {
	// JSONObject article = new JSONObject();
	// article.element("Aid ", "20");
	// article.element("Atitle ", "父母");
	// article.element("Acontent ", "嘱出自俄国籍犹太作");
	// article.element("Acomment ", "首先应是");
	// article.element("Aimage ", "1-01.jpg");
	// article.element("Uid ", "20");
	// String result = HttpDriver.doPost("http://192.168.204.144:3000/api/article",
	// article);
	// String art = this.change(result);
	// System.out.println(art);
	// // assertEquals(login, "ok");
	// }

	// ------------3.1获取所有说说信息
	@Test
	public void say_test1() throws Exception {
		String say_test_id = HttpDriver.doGet("http://192.168.204.144:3000/api/say");
		String say = this.change(say_test_id);
		System.out.println(say);
		JSONObject json = JSONObject.fromObject(say);
		assertEquals(json.getString("sid"), "1");
	}

	// -------------3.2获得说说详细信息
	@Test
	public void say_test2() throws Exception {
		String say_test_id = HttpDriver.doGet("http://192.168.204.144:3000/api/say/1");
		String say = this.change(say_test_id);
		System.out.println(say);
		JSONObject json = JSONObject.fromObject(say);
		assertEquals(json.getString("sid"), "1");
	}

	// ------------3.3上传说说
	// @Test
	// public void say_test3() {
	// JSONObject user = new JSONObject();
	// user.element("sid ", "20000000000");
	// user.element("scontent ", "123456");
	// user.element("simage ", "123456");
	// user.element("uid ", "123456");
	// String result = HttpDriver.doPost("http://192.168.204.144:3000/api/say",
	// user);
	// String login = this.change(result);
	// System.out.println(login);
	// // assertEquals(login, "ok");
	// }

	// -------------4.1获取所有意见反馈信息
	@Test
	public void back_test1() throws Exception {
		String back_id = HttpDriver.doGet("http://192.168.204.144:3000/api/back");
		String back = this.change(back_id);
		System.out.println(back);
		JSONObject json = JSONObject.fromObject(back);
		assertEquals(json.getString("rid"), "1");
	}

	// --------------4.2获得意见反馈详细信息
	@Test
	public void back_test2() throws Exception {
		String back_id = HttpDriver.doGet("http://192.168.204.144:3000/api/back/1");
		String back = this.change(back_id);
		System.out.println(back);
		JSONObject json = JSONObject.fromObject(back);
		assertEquals(json.getString("rid"), "1");
	}

	// --------------4.3上传意见反馈
	// @Test
	// public void back_test3() {
	// JSONObject user = new JSONObject();
	// user.element("rid ", "20000000000");
	// user.element("rcontent ", "123456");
	// user.element("rimage ", "123456");
	// user.element("utel ", "123456");
	// user.element("uid ", "123456");
	// String result = HttpDriver.doPost("http://192.168.204.144:3000/api/back",
	// user);
	// String login = this.change(result);
	// System.out.println(login);
	// // assertEquals(login, "ok");
	// }

	// -------------5.1获取所有文章评论信息
	@Test
	public void articlecomment_test1() throws Exception {
		String articlecomment_id = HttpDriver.doGet("http://192.168.204.144:3000/api/articlecomment");
		String articlecomment = this.change(articlecomment_id);
		System.out.println(articlecomment);
		JSONObject json = JSONObject.fromObject(articlecomment);
		assertEquals(json.getString("acid"), "1");
	}

	// --------------5.2获得文章评论详细信息
	@Test
	public void articlecomment_test2() throws Exception {
		String articlecomment_id = HttpDriver.doGet("http://192.168.204.144:3000/api/articlecomment/1");
		String articlecomment = this.change(articlecomment_id);
		System.out.println(articlecomment);
		JSONObject json = JSONObject.fromObject(articlecomment);
		assertEquals(json.getString("acid"), "1");
	}

	// --------------5.3发布文章评论
	// @Test
	// public void articlecomment_test3() {
	// JSONObject user = new JSONObject();
	// user.element("acid ", "20000000000");
	// user.element("accontent ", "123456");
	// user.element("uid ", "123456");
	// user.element("aid ", "123456");
	// String result =
	// HttpDriver.doPost("http://192.168.204.144:3000/api/articlecomment", user);
	// String login = this.change(result);
	// System.out.println(login);
	// // assertEquals(login, "ok");
	// }

	// -------------6.1获取所有说说评论信息
	@Test
	public void saycomment_test1() throws Exception {
		String saycomment_id = HttpDriver.doGet("http://192.168.204.144:3000/api/saycomment");
		String saycomment = this.change(saycomment_id);
		System.out.println(saycomment);
		JSONObject json = JSONObject.fromObject(saycomment);
		assertEquals(json.getString("scid"), "1");
	}

	// --------------6.2获得文章评论详细信息
	@Test
	public void saycomment_test2() throws Exception {
		String saycomment_id = HttpDriver.doGet("http://192.168.204.144:3000/api/saycomment/1");
		String saycomment = this.change(saycomment_id);
		System.out.println(saycomment);
		JSONObject json = JSONObject.fromObject(saycomment);
		assertEquals(json.getString("scid"), "1");
	}

	// --------------6.3发布说说评论
	// @Test
	// public void saycomment_test3() {
	// JSONObject user = new JSONObject();
	// user.element("scid ", "20000000000");
	// user.element("sccontent ", "123456");
	// user.element("uid ", "123456");
	// user.element("sid ", "123456");
	// String result =
	// HttpDriver.doPost("http://192.168.204.144:3000/api/saycomment", user);
	// String login = this.change(result);
	// System.out.println(login);
	// // assertEquals(login, "ok");
	// }

	// -------------7.1获取所有相册信息
	@Test
	public void photos_test1() throws Exception {
		String photos_id = HttpDriver.doGet("http://192.168.204.144:3000/api/photos");
		String photos = this.change(photos_id);
		System.out.println(photos);
		JSONObject json = JSONObject.fromObject(photos);
		assertEquals(json.getString("xid"), "1");
	}

	// --------------7.2获得相册详细信息
	@Test
	public void photos_test2() throws Exception {
		String photos_id = HttpDriver.doGet("http://192.168.204.144:3000/api/photos/1");
		String photos = this.change(photos_id);
		System.out.println(photos);
		JSONObject json = JSONObject.fromObject(photos);
		assertEquals(json.getString("xid"), "1");
	}

	// --------------7.3创建相册
	// @Test
	// public void photos_test3() {
	// JSONObject user = new JSONObject();
	// user.element("xid ", "20000000000");
	// user.element("xname ", "123456");
	// user.element("xcount ", "123456");
	// user.element("uid ", "123456");
	// String result = HttpDriver.doPost("http://192.168.204.144:3000/api/photos",
	// user);
	// String login = this.change(result);
	// System.out.println(login);
	// // assertEquals(login, "ok");
	// }

	// -------------8.1获取所有照片信息
	@Test
	public void photo_test1() throws Exception {
		String photo_id = HttpDriver.doGet("http://192.168.204.144:3000/api/photo");
		String photo = this.change(photo_id);
		System.out.println(photo);
		JSONObject json = JSONObject.fromObject(photo);
		assertEquals(json.getString("pid"), "1");
	}

	// --------------8.2获得某一相册的所有照片
	// @Test
	// public void photo_test2() throws Exception {
	// String article_id =
	// HttpDriver.doGet("http://192.168.204.144:3000/api/photo/1");
	// String article = this.change(article_id);
	// System.out.println(article);
	// JSONObject json = JSONObject.fromObject(article);
	// assertEquals(json.getString("pid"), "1");
	// }

	// --------------8.3上传照片
	// @Test
	// public void photo_test3() {
	// JSONObject user = new JSONObject();
	// user.element("pid ", "20000000000");
	// user.element("pname ", "123456");
	// user.element("ptype ", "123456");
	// user.element("plocal ", "123456");
	// user.element("xid ", "123456");
	// String result = HttpDriver.doPost("http://192.168.204.144:3000/api/photo",
	// user);
	// String login = this.change(result);
	// System.out.println(login);
	// // assertEquals(login, "ok");
	// }

	// -------------9.1获取所有照片信息
	@Test
	public void video_test1() throws Exception {
		String video_id = HttpDriver.doGet("http://192.168.204.144:3000/api/video");
		String video = this.change(video_id);
		System.out.println(video);
	}

	// --------------9.2获得某一视频的详细信息
	@Test
	public void video_test2() throws Exception {
		String video_id = HttpDriver.doGet("http://192.168.204.144:3000/api/video/1");
		String video = this.change(video_id);
		System.out.println(video);

	}

	// --------------9.3上传照片
	// @Test
	// public void xideo_test3() {
	// JSONObject user = new JSONObject();
	// user.element("vid ", "20000000000");
	// user.element("vname ", "123456");
	// user.element("vtype ", "123456");
	// user.element("vlocal ", "123456");
	// user.element("uid ", "123456");
	// String result = HttpDriver.doPost("http://192.168.204.144:3000/api/video",
	// user);
	// String login = this.change(result);
	// System.out.println(login);
	// // assertEquals(login, "ok");
	// }

	// ------------------10.1创建成长树
	// @Test
	// public void tree_test2() throws Exception {
	// JSONObject user = new JSONObject();
	// user.element("uid ", "1");
	// String result = HttpDriver.doPost("http://192.168.204.144:3000/api/video",
	// user);
	// String tree = this.change(result);
	// System.out.println(tree);
	//
	// }

	// -----------------11.1获得某一成长树的所有果实
	@Test
	public void fruit_test2() throws Exception {
		String fruit_id = HttpDriver.doGet("http://192.168.204.144:3000/api/fruit/1");
		String fruit = this.change(fruit_id);
		System.out.println(fruit);
		JSONObject json = JSONObject.fromObject(fruit);
		assertEquals(json.getString("fid"), "1");

	}

	// -----------------11.2修改果实名字

	// -----------------11.3添加果实

	// ------------------11.4添加果实
}
