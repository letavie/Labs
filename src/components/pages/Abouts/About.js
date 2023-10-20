import image from "../../../img/personWeb.png";
import "./About.css";
function About() {
  return (
    <div className="container-about">
      <p className="para">
        Xin chào bạn đã đến với trang web của chúng tôi. Đây là một trang web
        chuyên cung cấp các bộ phim hoạt hình Nhật Bản (anime) mới nhất và đa
        dạng về thể loại.<br></br>
        Trang web của chúng tôi thường xuyên cập nhật những bộ phim anime mới ra
        mắt trên các kênh truyền hình và rạp chiếu phim Nhật Bản. Bạn sẽ thấy ở
        đây có các thể loại phổ biến như: shounen, shoujo, hài hước, hành động,
        tình cảm lãng mạn và nhiều hơn nữa.<br></br>
        Hầu hết các bộ phim đều được cập nhật phiên bản phụ đề tiếng Việt để
        người xem dễ theo dõi nội dung. Bên cạnh đó, trang web cũng thường xuyên
        cập nhật những tin tức và sự kiện mới nhất trong giới anime nhằm mang
        đến cho người hâm mộ những trải nghiệm thú vị nhất.<br></br>
        Chúc các bạn thật vui vẻ khi khám phá những bộ phim hay trên trang web
        của chúng tôi. Hãy để lại những ý kiến đóng góp của mình nhé!<br></br>
      </p>
      <img src={image} className="img"></img>
    </div>
  );
}

export default About;
