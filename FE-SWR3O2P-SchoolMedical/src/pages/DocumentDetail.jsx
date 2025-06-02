import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, Button, Space } from 'antd';
import styled from 'styled-components';
import { ArrowLeftOutlined, FileTextOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const DocumentDetailContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

// Placeholder data for individual documents
// In a real app, this would likely be fetched from an API
const fullDocuments = [
  {
    id: '1',
    title: 'Hướng dẫn phòng chống dịch bệnh',
    content: [
      { type: 'paragraph', text: 'Tài liệu này cung cấp thông tin chi tiết về các biện pháp phòng chống dịch bệnh phổ biến trong môi trường học đường.' },
      { type: 'heading', level: 4, text: '1. Vệ sinh tay' },
      { type: 'paragraph', text: 'Hướng dẫn rửa tay đúng cách với xà phòng và nước sạch hoặc dung dịch sát khuẩn.' },
      { type: 'heading', level: 4, text: '2. Đeo khẩu trang' },
      { type: 'paragraph', text: 'Lợi ích của việc đeo khẩu trang và hướng dẫn sử dụng khẩu trang đúng cách.' },
       { type: 'heading', level: 4, text: '3. Giữ khoảng cách' },
      { type: 'paragraph', text: 'Tầm quan trọng của việc duy trì khoảng cách an toàn để ngăn chặn lây lan.' },
       { type: 'heading', level: 4, text: '4. Thông báo khi có triệu chứng' },
      { type: 'paragraph', text: 'Quy trình thông báo cho nhà trường khi học sinh có các triệu chứng bệnh.' },
    ],
  },
  {
    id: '2',
    title: 'Chăm sóc sức khỏe tâm thần cho học sinh',
     content: [
      { type: 'paragraph', text: 'Tài liệu hướng dẫn cách nhận biết và hỗ trợ các vấn đề sức khỏe tâm thần ở học sinh.' },
      { type: 'heading', level: 4, text: '1. Dấu hiệu nhận biết' },
      { type: 'paragraph', text: 'Các dấu hiệu cảnh báo về sức khỏe tâm thần ở trẻ em và thanh thiếu niên.' },
      { type: 'heading', level: 4, text: '2. Cách hỗ trợ' },
      { type: 'paragraph', text: 'Những lời khuyên cho giáo viên và phụ huynh trong việc hỗ trợ học sinh.' },
       { type: 'heading', level: 4, text: '3. Tìm kiếm sự giúp đỡ chuyên nghiệp' },
      { type: 'paragraph', text: 'Thông tin về các dịch vụ tư vấn và hỗ trợ sức khỏe tâm thần.' },
    ],
  },
   {
    id: '3',
    title: 'Chế độ dinh dưỡng cho học sinh',
     content: [
      { type: 'paragraph', text: 'Hướng dẫn xây dựng chế độ ăn cân đối và lành mạnh cho học sinh các cấp.' },
       { type: 'heading', level: 4, text: '1. Các nhóm thực phẩm chính' },
      { type: 'paragraph', text: 'Vai trò và nguồn thực phẩm của các nhóm chất dinh dưỡng.' },
       { type: 'heading', level: 4, text: '2. Thực đơn gợi ý' },
      { type: 'paragraph', text: 'Gợi ý các thực đơn mẫu cho bữa sáng, trưa, chiều.' },
       { type: 'heading', level: 4, text: '3. Lưu ý đặc biệt' },
      { type: 'paragraph', text: 'Lời khuyên về việc uống nước, hạn chế đồ ngọt, và bữa phụ.' },
    ],
  },
   {
    id: '4',
    title: 'Hướng dẫn tiêm chủng đầy đủ',
     content: [
      { type: 'paragraph', text: 'Thông tin về các loại vaccine cần thiết cho học sinh và lịch tiêm chủng khuyến nghị.' },
       { type: 'heading', level: 4, text: '1. Tầm quan trọng của tiêm chủng' },
      { type: 'paragraph', text: 'Lợi ích của việc tiêm chủng đầy đủ trong việc phòng bệnh.' },
       { type: 'heading', level: 4, text: '2. Các loại vaccine khuyến nghị' },
      { type: 'paragraph', text: 'Thông tin về các loại vaccine trong chương trình tiêm chủng mở rộng và các vaccine khác.' },
       { type: 'heading', level: 4, text: '3. Lịch tiêm chủng' },
      { type: 'paragraph', text: 'Lịch tiêm chủng cụ thể theo từng độ tuổi.' },
    ],
  },
   {
    id: '5',
    title: 'Cẩm nang sức khỏe học đường',
     content: [
      { type: 'paragraph', text: 'Cẩm nang tổng hợp các kiến thức cơ bản về sức khỏe học đường.' },
       { type: 'heading', level: 4, text: '1. Vệ sinh cá nhân và môi trường' },
      { type: 'paragraph', text: 'Hướng dẫn giữ gìn vệ sinh thân thể và không gian học tập.' },
       { type: 'heading', level: 4, text: '2. Dinh dưỡng và vận động' },
      { type: 'paragraph', text: 'Chế độ ăn uống và hoạt động thể chất phù hợp.' },
       { type: 'heading', level: 4, text: '3. Phòng tránh tai nạn thương tích' },
      { type: 'paragraph', text: 'Các biện pháp an toàn trong trường học và khi tham gia giao thông.' },
    ],
  },
    {
    id: '6',
    title: 'Tài liệu về bệnh thường gặp ở trẻ em',
     content: [
      { type: 'paragraph', text: 'Tài liệu mô tả các bệnh phổ biến ở trẻ em, dấu hiệu nhận biết và cách xử lý ban đầu.' },
       { type: 'heading', level: 4, text: '1. Bệnh hô hấp' },
      { type: 'paragraph', text: 'Các bệnh như cảm cúm, viêm họng, viêm phế quản.' },
       { type: 'heading', level: 4, text: '2. Bệnh tiêu hóa' },
      { type: 'paragraph', text: 'Các bệnh như tiêu chảy, ngộ độc thực phẩm.' },
       { type: 'heading', level: 4, text: '3. Bệnh ngoài da' },
      { type: 'paragraph', text: 'Các bệnh như thủy đậu, sởi, tay chân miệng.' },
    ],
  },
    {
    id: '7',
    title: 'Hướng dẫn sơ cứu cơ bản',
     content: [
      { type: 'paragraph', text: 'Tài liệu cung cấp kiến thức và kỹ năng sơ cứu cơ bản cho các tình huống khẩn cấp.' },
       { type: 'heading', level: 4, text: '1. Xử lý vết thương hở' },
      { type: 'paragraph', text: 'Các bước làm sạch và băng bó vết thương.' },
       { type: 'heading', level: 4, text: '2. Xử lý bỏng' },
      { type: 'paragraph', text: 'Các bước sơ cứu khi bị bỏng nhiệt, bỏng hóa chất.' },
       { type: 'heading', level: 4, text: '3. Xử lý gãy xương, bong gân' },
      { type: 'paragraph', text: 'Cách cố định tạm thời và vận chuyển nạn nhân.' },
    ],
  },
     {
    id: '8',
    title: 'Chính sách bảo vệ sức khỏe học sinh',
     content: [
      { type: 'paragraph', text: 'Tổng hợp các quy định và chính sách của nhà nước và nhà trường về công tác y tế học đường.' },
       { type: 'heading', level: 4, text: '1. Khám sức khỏe định kỳ' },
      { type: 'paragraph', text: 'Quy định về việc tổ chức khám sức khỏe cho học sinh hàng năm.' },
       { type: 'heading', level: 4, text: '2. Bảo hiểm y tế học sinh' },
      { type: 'paragraph', text: 'Thông tin về quyền lợi và thủ tục tham gia bảo hiểm y tế.' },
       { type: 'heading', level: 4, text: '3. Y tế trường học' },
      { type: 'paragraph', text: 'Vai trò và nhiệm vụ của bộ phận y tế tại trường học.' },
    ],
  },
];

function DocumentDetail() {
  const { id } = useParams();
  const document = fullDocuments.find(doc => doc.id === id);

  if (!document) {
    return (
      <DocumentDetailContainer>
        <Title level={3}>Không tìm thấy tài liệu</Title>
        <Text>Tài liệu bạn đang tìm kiếm không tồn tại.</Text>
      </DocumentDetailContainer>
    );
  }

  return (
    <DocumentDetailContainer>
       <Button type="link" icon={<ArrowLeftOutlined />} onClick={() => window.history.back()} style={{ marginBottom: 20 }}>
        Quay lại Tài liệu
      </Button>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 20 }}><FileTextOutlined style={{ marginRight: 10, color: '#1890ff' }} />{document.title}</Title>
      
      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        {document.content.map((block, index) => {
          if (block.type === 'paragraph') {
            return <Text key={index}><div dangerouslySetInnerHTML={{ __html: block.text }} /></Text>;
          }
          if (block.type === 'heading') {
            return <Title key={index} level={block.level}>{block.text}</Title>;
          }
           if (block.type === 'list') {
            return (
              <ul key={index} style={{ paddingLeft: 20 }}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}><Text><div dangerouslySetInnerHTML={{ __html: item }} /></Text></li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </Space>
    </DocumentDetailContainer>
  );
}

export default DocumentDetail; 