import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "5 cách phòng tránh bệnh học đường",
    excerpt: "Bí quyết giữ gìn sức khỏe cho học sinh...",
  },
  {
    id: 2,
    title: "Dinh dưỡng hợp lý cho trẻ",
    excerpt: "Thực đơn cân đối cho học sinh các cấp...",
  },
];

export default function BlogList() {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.excerpt}</p>
          <Link to={`/blog/${post.id}`}>Đọc tiếp</Link>
        </li>
      ))}
    </ul>
  );
}
