import { useParams } from 'react-router-dom';
import { Card, Typography, Divider, Space, Button } from 'antd';
import styled from 'styled-components';
import BlogList from '../components/BlogList';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

// Assume a more complete data structure for individual blog posts
// In a real app, you would fetch this data based on the ID
const fullBlogPosts = [
  {
    id: '1',
    title: '5 cách phòng tránh bệnh học đường',
    imageUrl: 'https://via.placeholder.com/700x300?text=Hinh+minh+hoa',
    author: 'Admin',
    date: '01/06/2024',
    content: [
      { type: 'paragraph', text: 'Bệnh học đường là các bệnh phổ biến ở lứa tuổi học sinh, thường liên quan đến điều kiện học tập và sinh hoạt. Phòng tránh các bệnh này giúp các em có sức khỏe tốt để học tập và phát triển.' },
      { type: 'heading', level: 4, text: '1. Rửa tay thường xuyên' },
      { type: 'paragraph', text: 'Rửa tay bằng xà phòng và nước sạch là biện pháp đơn giản và hiệu quả nhất để phòng tránh nhiều bệnh truyền nhiễm, đặc biệt là các bệnh lây qua đường tiêu hóa và hô hấp.' },
      { type: 'heading', level: 4, text: '2. Giữ gìn vệ sinh cá nhân' },
      { type: 'paragraph', text: 'Đánh răng ít nhất 2 lần/ngày, tắm rửa hàng ngày, cắt móng tay móng chân gọn gàng giúp ngăn ngừa vi khuẩn phát triển và gây bệnh.' },
      { type: 'heading', level: 4, text: '3. Không dùng chung đồ dùng cá nhân' },
      { type: 'paragraph', text: 'Không dùng chung khăn mặt, bàn chải đánh răng, cốc uống nước... với người khác để tránh lây truyền các bệnh ngoài da hoặc bệnh lây qua đường nước bọt.' },
      { type: 'heading', level: 4, text: '4. Không ăn uống ở nơi đông người, không đảm bảo vệ sinh' },
      { type: 'paragraph', text: 'Hạn chế ăn uống tại những nơi không rõ nguồn gốc thực phẩm, không đảm bảo vệ sinh an toàn thực phẩm để tránh ngộ độc thực phẩm và các bệnh đường ruột.' },
      { type: 'heading', level: 4, text: '5. Tiêm chủng đầy đủ theo lịch' },
      { type: 'paragraph', text: 'Tiêm chủng đầy đủ các loại vaccine theo lịch của Bộ Y tế giúp tạo miễn dịch phòng ngừa các bệnh nguy hiểm như sởi, rubella, quai bị, thủy đậu, viêm gan B, v.v.' },
      { type: 'paragraph', text: 'Bằng cách thực hiện tốt các biện pháp phòng tránh đơn giản này, học sinh có thể tự bảo vệ sức khỏe của mình và góp phần xây dựng môi trường học đường an toàn, lành mạnh.' },
    ],
  },
   {
    id: '2',
    title: 'Dinh dưỡng hợp lý cho trẻ',
    imageUrl: 'https://via.placeholder.com/700x300?text=Dinh+duong+cho+tre',
    author: 'Chuyên gia Dinh dưỡng',
    date: '10/05/2024',
    content: [
      { type: 'paragraph', text: 'Dinh dưỡng đóng vai trò cực kỳ quan trọng đối với sự phát triển toàn diện về thể chất và trí tuệ của trẻ em, đặc biệt là lứa tuổi học đường. Một chế độ ăn cân đối, đầy đủ chất dinh dưỡng giúp trẻ tăng trưởng tốt, nâng cao sức đề kháng và khả năng học tập.' },
      { type: 'heading', level: 4, text: 'Các nhóm chất dinh dưỡng cần thiết:' },
      { type: 'list', items: [
        '**Protein:** Cần thiết cho sự phát triển cơ bắp, tế bào và hệ miễn dịch. Có nhiều trong thịt, cá, trứng, sữa, đậu đỗ.',
        '**Carbohydrate:** Nguồn năng lượng chính cho cơ thể và não bộ. Chọn các loại carbohydrate phức tạp như gạo lứt, yến mạch, rau củ.',
        '**Chất béo:** Quan trọng cho sự phát triển não bộ và hấp thu vitamin. Ưu tiên chất béo không bão hòa từ quả bơ, hạt, dầu ô liu.',
        '**Vitamin và Khoáng chất:** Tham gia vào nhiều chức năng của cơ thể. Bổ sung từ đa dạng rau củ quả các màu sắc.',
        '**Nước:** Cần thiết cho mọi hoạt động của cơ thể. Đảm bảo trẻ uống đủ nước hàng ngày.',
      ]},
      { type: 'heading', level: 4, text: 'Xây dựng thực đơn cân đối:' },
       { type: 'paragraph', text: 'Một thực đơn hàng ngày cho trẻ cần đảm bảo đủ 4 nhóm thực phẩm chính: Nhóm chất đạm, nhóm chất bột đường, nhóm chất béo, nhóm vitamin và khoáng chất. Chia thành 3 bữa chính và 1-2 bữa phụ.' },
      { type: 'heading', level: 4, text: 'Lời khuyên:' },
       { type: 'list', items: [
        'Khuyến khích trẻ ăn sáng đầy đủ.',
        'Hạn chế đồ ăn nhanh, đồ ngọt, nước ngọt có gas.',
        'Tạo không khí vui vẻ trong bữa ăn.',
        'Cho trẻ tham gia vào việc chuẩn bị bữa ăn (nếu có thể).',
        'Theo dõi cân nặng và chiều cao của trẻ định kỳ.',
      ]},
      { type: 'paragraph', text: 'Hãy xây dựng cho trẻ một thói quen ăn uống lành mạnh ngay từ nhỏ để tạo nền tảng vững chắc cho sức khỏe và tương lai của trẻ.' },
    ],
  },
];

const BlogDetailContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const BlogImage = styled.img`
  width: 100%;
  height: auto; // Adjust height automatically
  max-height: 400px; // Maximum height
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ContentSection = styled.div`
  margin-top: 20px;
  line-height: 1.7;

  h4 {
    margin-top: 16px;
    margin-bottom: 8px;
    color: #096dd9; // Darker blue for headings
  }

  p {
    margin-bottom: 12px;
  }

  ul {
    margin-bottom: 12px;
    padding-left: 20px;
  }

   li {
    margin-bottom: 8px;
  }
`;

function Blog() {
  const { id } = useParams();

  if (id) {
    // Existing logic to display a single blog post
    const blogPost = fullBlogPosts.find(post => post.id === id);

    if (!blogPost) {
      return (
        <BlogDetailContainer>
          <Title level={3}>Không tìm thấy bài viết</Title>
          <Text>Bài viết bạn đang tìm kiếm không tồn tại.</Text>
        </BlogDetailContainer>
      );
    }

    return (
      <BlogDetailContainer>
        <Button type="link" icon={<ArrowLeftOutlined />} onClick={() => window.history.back()} style={{ marginBottom: 20 }}>
          Quay lại Blog
        </Button>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 10 }}>{blogPost.title}</Title>
        <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 20 }}>
          Bởi {blogPost.author} vào ngày {blogPost.date}
        </Text>
        {blogPost.imageUrl && <BlogImage src={blogPost.imageUrl} alt={blogPost.title} />}

        <ContentSection>
          {blogPost.content.map((block, index) => {
            if (block.type === 'paragraph') {
              return <Text key={index}><div dangerouslySetInnerHTML={{ __html: block.text }} /></Text>;
            }
            if (block.type === 'heading') {
              return <Title key={index} level={block.level}>{block.text}</Title>;
            }
            if (block.type === 'list') {
              return (
                <ul key={index}>
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}><Text><div dangerouslySetInnerHTML={{ __html: item }} /></Text></li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </ContentSection>
      </BlogDetailContainer>
    );
  } else {
    // Render BlogList when no ID is present
    return <BlogList />;
  }
}

export default Blog;
