export const blogCategories = [
  { id: 1, name: 'Dinh dưỡng học đường', color: 'blue', icon: '🍎' },
  { id: 2, name: 'Sức khỏe tâm lý', color: 'green', icon: '🧠' },
  { id: 3, name: 'Phòng bệnh', color: 'orange', icon: '🛡️' },
  { id: 4, name: 'Vận động', color: 'purple', icon: '🏃' },
  { id: 5, name: 'Tiêm chủng', color: 'red', icon: '💉' },
  { id: 6, name: 'Sơ cứu', color: 'volcano', icon: '🚑' },
  { id: 7, name: 'Vệ sinh', color: 'cyan', icon: '🧼' },
  { id: 8, name: 'Tầm soát', color: 'geekblue', icon: '🔍' },
  { id: 9, name: 'Dịch bệnh', color: 'magenta', icon: '🦠' },
  { id: 10, name: 'Chăm sóc răng miệng', color: 'lime', icon: '🦷' },
];

export const educationalDocuments = [
  {
    id: '1',
    title: 'Hướng dẫn phòng chống dịch bệnh trong trường học',
    description: 'Tài liệu hướng dẫn chi tiết về các biện pháp phòng chống dịch bệnh trong môi trường học đường',
    imageUrl: 'https://images.unsplash.com/photo-1584036561561-b49b3a36a3ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Phòng bệnh',
    date: '01/06/2024',
    author: 'Bộ Y tế',
    views: 2345,
    downloads: 1234,
    fileSize: '2.5 MB',
    fileType: 'PDF',
    tags: ['Dịch bệnh', 'Phòng chống', 'Hướng dẫn'],
    content: [
      { type: 'heading', text: '1. Các biện pháp phòng chống dịch bệnh' },
      { type: 'list', items: [
        'Vệ sinh môi trường học đường',
        'Khử khuẩn bề mặt tiếp xúc',
        'Đảm bảo thông thoáng không khí',
        'Xử lý rác thải đúng cách'
      ]},
      { type: 'heading', text: '2. Quy trình xử lý khi có ca bệnh' },
      { type: 'list', items: [
        'Cách ly người bệnh',
        'Thông báo cho cơ quan y tế',
        'Khử khuẩn khu vực có người bệnh',
        'Theo dõi sức khỏe học sinh'
      ]},
      { type: 'heading', text: '3. Tài liệu tham khảo' },
      { type: 'list', items: [
        'Quyết định số 1234/QĐ-BYT',
        'Thông tư số 5678/TT-BYT',
        'Hướng dẫn của WHO'
      ]}
    ]
  },
  {
    id: '2',
    title: 'Chế độ dinh dưỡng học đường',
    description: 'Tài liệu hướng dẫn về chế độ dinh dưỡng hợp lý cho học sinh các cấp',
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Dinh dưỡng học đường',
    date: '02/06/2024',
    author: 'Viện Dinh dưỡng',
    views: 1876,
    downloads: 987,
    fileSize: '3.2 MB',
    fileType: 'PDF',
    tags: ['Dinh dưỡng', 'Thực đơn', 'Học đường'],
    content: [
      { type: 'heading', text: '1. Nhu cầu dinh dưỡng theo lứa tuổi' },
      { type: 'list', items: [
        'Học sinh tiểu học',
        'Học sinh THCS',
        'Học sinh THPT'
      ]},
      { type: 'heading', text: '2. Thực đơn mẫu' },
      { type: 'list', items: [
        'Thực đơn theo mùa',
        'Thực đơn cho học sinh bán trú',
        'Thực đơn cho học sinh nội trú'
      ]},
      { type: 'heading', text: '3. Hướng dẫn thực hiện' },
      { type: 'list', items: [
        'Quy trình chế biến',
        'Bảo quản thực phẩm',
        'Vệ sinh an toàn thực phẩm'
      ]}
    ]
  },
  {
    id: '3',
    title: 'Hướng dẫn sơ cứu và cấp cứu ban đầu',
    description: 'Tài liệu hướng dẫn chi tiết về các kỹ năng sơ cứu và cấp cứu ban đầu trong trường học',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Sơ cứu',
    date: '03/06/2024',
    author: 'Bệnh viện Nhi Trung ương',
    views: 3456,
    downloads: 2345,
    fileSize: '4.1 MB',
    fileType: 'PDF',
    tags: ['Sơ cứu', 'Cấp cứu', 'Hướng dẫn'],
    content: [
      { type: 'heading', text: '1. Các tình huống cấp cứu thường gặp' },
      { type: 'list', items: [
        'Chảy máu',
        'Gãy xương',
        'Bỏng',
        'Ngất xỉu',
        'Động kinh'
      ]},
      { type: 'heading', text: '2. Kỹ năng sơ cứu cơ bản' },
      { type: 'list', items: [
        'Hô hấp nhân tạo',
        'Ép tim ngoài lồng ngực',
        'Cầm máu',
        'Băng bó vết thương'
      ]},
      { type: 'heading', text: '3. Trang thiết bị y tế cần thiết' },
      { type: 'list', items: [
        'Tủ thuốc sơ cứu',
        'Băng gạc y tế',
        'Dụng cụ cấp cứu',
        'Xe đẩy cấp cứu'
      ]}
    ]
  },
  {
    id: '4',
    title: 'Chăm sóc sức khỏe tâm lý học đường',
    description: 'Tài liệu hướng dẫn về công tác chăm sóc sức khỏe tâm lý cho học sinh',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Sức khỏe tâm lý',
    date: '04/06/2024',
    author: 'Viện Tâm lý học',
    views: 2987,
    downloads: 1567,
    fileSize: '3.8 MB',
    fileType: 'PDF',
    tags: ['Tâm lý', 'Học đường', 'Hướng dẫn'],
    content: [
      { type: 'heading', text: '1. Các vấn đề tâm lý thường gặp' },
      { type: 'list', items: [
        'Stress học tập',
        'Rối loạn lo âu',
        'Trầm cảm',
        'Bắt nạt học đường'
      ]},
      { type: 'heading', text: '2. Phương pháp can thiệp' },
      { type: 'list', items: [
        'Tư vấn tâm lý',
        'Liệu pháp nhóm',
        'Hoạt động trị liệu',
        'Phối hợp với gia đình'
      ]},
      { type: 'heading', text: '3. Tài liệu tham khảo' },
      { type: 'list', items: [
        'Sách chuyên khảo',
        'Bài báo khoa học',
        'Hướng dẫn thực hành'
      ]}
    ]
  }
];

export const featuredPosts = [
  {
    id: '1',
    title: '5 cách phòng tránh bệnh học đường',
    excerpt: 'Các biện pháp phòng tránh bệnh học đường hiệu quả cho học sinh, bao gồm vệ sinh cá nhân, dinh dưỡng và vận động hợp lý...',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Phòng bệnh',
    date: '01/06/2024',
    author: 'Admin',
    views: 1234,
    likes: 89,
    comments: 23,
    rating: 4.5,
    tags: ['Vệ sinh', 'Dinh dưỡng', 'Vận động'],
    readTime: '5 phút',
  },
  {
    id: '2',
    title: 'Chế độ dinh dưỡng cho học sinh tiểu học',
    excerpt: 'Hướng dẫn xây dựng chế độ dinh dưỡng khoa học cho học sinh tiểu học, đảm bảo phát triển toàn diện...',
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Dinh dưỡng học đường',
    date: '02/06/2024',
    author: 'Chuyên gia dinh dưỡng',
    views: 987,
    likes: 76,
    comments: 15,
    rating: 4.8,
    tags: ['Dinh dưỡng', 'Phát triển', 'Thực đơn'],
    readTime: '7 phút',
  },
  {
    id: '3',
    title: 'Hướng dẫn sơ cứu cơ bản tại trường học',
    excerpt: 'Các kỹ năng sơ cứu cơ bản mà giáo viên và học sinh cần biết để xử lý các tình huống khẩn cấp...',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Sơ cứu',
    date: '03/06/2024',
    author: 'Bác sĩ Nguyễn Văn A',
    views: 1567,
    likes: 145,
    comments: 34,
    rating: 4.9,
    tags: ['Sơ cứu', 'Khẩn cấp', 'An toàn'],
    readTime: '10 phút',
  },
  {
    id: '4',
    title: 'Chăm sóc sức khỏe tâm lý cho học sinh',
    excerpt: 'Các phương pháp giúp học sinh duy trì sức khỏe tâm lý tốt, đối phó với stress và áp lực học tập...',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'Sức khỏe tâm lý',
    date: '04/06/2024',
    author: 'Chuyên gia tâm lý',
    views: 2345,
    likes: 198,
    comments: 45,
    rating: 4.7,
    tags: ['Tâm lý', 'Stress', 'Học tập'],
    readTime: '8 phút',
  },
];

export const fullBlogPosts = [
  {
    id: '1',
    title: '5 cách phòng tránh bệnh học đường',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    author: 'Admin',
    date: '01/06/2024',
    category: 'Phòng bệnh',
    views: 1234,
    likes: 89,
    comments: 23,
    rating: 4.5,
    tags: ['Vệ sinh', 'Dinh dưỡng', 'Vận động'],
    readTime: '5 phút',
    content: [
      { type: 'paragraph', text: 'Bệnh học đường là các bệnh phổ biến ở lứa tuổi học sinh, thường liên quan đến điều kiện học tập và sinh hoạt. Phòng tránh các bệnh này giúp các em có sức khỏe tốt để học tập và phát triển.' },
      { type: 'heading', level: 4, text: '1. Rửa tay thường xuyên' },
      { type: 'paragraph', text: 'Rửa tay bằng xà phòng và nước sạch là biện pháp đơn giản và hiệu quả nhất để phòng tránh nhiều bệnh truyền nhiễm, đặc biệt là các bệnh lây qua đường tiêu hóa và hô hấp.' },
      { type: 'list', items: [
        'Rửa tay trước khi ăn',
        'Rửa tay sau khi đi vệ sinh',
        'Rửa tay sau khi ho, hắt hơi',
        'Rửa tay sau khi chơi đùa'
      ]},
      { type: 'heading', level: 4, text: '2. Giữ gìn vệ sinh cá nhân' },
      { type: 'paragraph', text: 'Đánh răng ít nhất 2 lần/ngày, tắm rửa hàng ngày, cắt móng tay móng chân gọn gàng giúp ngăn ngừa vi khuẩn phát triển và gây bệnh.' },
      { type: 'heading', level: 4, text: '3. Không dùng chung đồ dùng cá nhân' },
      { type: 'paragraph', text: 'Không dùng chung khăn mặt, bàn chải đánh răng, cốc uống nước... với người khác để tránh lây truyền các bệnh ngoài da hoặc bệnh lây qua đường nước bọt.' },
      { type: 'heading', level: 4, text: '4. Duy trì chế độ dinh dưỡng hợp lý' },
      { type: 'paragraph', text: 'Ăn uống đầy đủ chất dinh dưỡng, uống đủ nước và hạn chế đồ ăn nhanh giúp tăng cường sức đề kháng cho cơ thể.' },
      { type: 'heading', level: 4, text: '5. Vận động thường xuyên' },
      { type: 'paragraph', text: 'Tập thể dục đều đặn giúp tăng cường sức khỏe, phòng tránh các bệnh về xương khớp và tim mạch.' },
    ],
    relatedPosts: [
      { id: '2', title: 'Chế độ dinh dưỡng cho học sinh tiểu học' },
      { id: '3', title: 'Hướng dẫn sơ cứu cơ bản tại trường học' },
    ],
  },
  {
    id: '2',
    title: 'Chế độ dinh dưỡng cho học sinh tiểu học',
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    author: 'Chuyên gia dinh dưỡng',
    date: '02/06/2024',
    category: 'Dinh dưỡng học đường',
    views: 987,
    likes: 76,
    comments: 15,
    rating: 4.8,
    tags: ['Dinh dưỡng', 'Phát triển', 'Thực đơn'],
    readTime: '7 phút',
    content: [
      { type: 'paragraph', text: 'Dinh dưỡng đóng vai trò quan trọng trong sự phát triển toàn diện của học sinh tiểu học. Một chế độ dinh dưỡng hợp lý giúp các em có đủ năng lượng cho học tập và vui chơi.' },
      { type: 'heading', level: 4, text: '1. Các nhóm chất dinh dưỡng cần thiết' },
      { type: 'list', items: [
        'Chất đạm: Thịt, cá, trứng, sữa, đậu',
        'Chất bột đường: Cơm, bánh mì, ngũ cốc',
        'Chất béo: Dầu thực vật, mỡ động vật',
        'Vitamin và khoáng chất: Rau xanh, trái cây'
      ]},
      { type: 'heading', level: 4, text: '2. Thực đơn mẫu cho một ngày' },
      { type: 'paragraph', text: 'Bữa sáng: Bánh mì, trứng, sữa tươi\nBữa trưa: Cơm, thịt/cá, rau xanh, canh\nBữa phụ: Trái cây, sữa chua\nBữa tối: Cơm, thịt/cá, rau xanh, canh' },
      { type: 'heading', level: 4, text: '3. Lưu ý quan trọng' },
      { type: 'list', items: [
        'Ăn đủ 3 bữa chính và 2-3 bữa phụ',
        'Uống đủ nước (1.5-2 lít/ngày)',
        'Hạn chế đồ ăn nhanh, nước ngọt',
        'Tăng cường rau xanh và trái cây'
      ]},
    ],
    relatedPosts: [
      { id: '1', title: '5 cách phòng tránh bệnh học đường' },
      { id: '4', title: 'Chăm sóc sức khỏe tâm lý cho học sinh' },
    ],
  },
  {
    id: '3',
    title: 'Hướng dẫn sơ cứu cơ bản tại trường học',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    author: 'Bác sĩ Nguyễn Văn A',
    date: '03/06/2024',
    category: 'Sơ cứu',
    views: 1567,
    likes: 145,
    comments: 34,
    rating: 4.9,
    tags: ['Sơ cứu', 'Khẩn cấp', 'An toàn'],
    readTime: '10 phút',
    content: [
      { type: 'paragraph', text: 'Sơ cứu là những biện pháp cấp cứu ban đầu khi có tai nạn xảy ra. Việc nắm vững các kỹ năng sơ cứu cơ bản giúp xử lý kịp thời các tình huống khẩn cấp tại trường học.' },
      { type: 'heading', level: 4, text: '1. Sơ cứu vết thương' },
      { type: 'list', items: [
        'Rửa sạch vết thương bằng nước muối sinh lý',
        'Sát trùng bằng cồn hoặc povidone iodine',
        'Băng vết thương bằng gạc vô trùng',
        'Đưa đến cơ sở y tế nếu vết thương sâu'
      ]},
      { type: 'heading', level: 4, text: '2. Sơ cứu gãy xương' },
      { type: 'paragraph', text: 'Cố định vùng bị thương, không di chuyển nạn nhân, gọi cấp cứu ngay lập tức.' },
      { type: 'heading', level: 4, text: '3. Sơ cứu ngất xỉu' },
      { type: 'list', items: [
        'Đặt nạn nhân nằm ngửa, đầu thấp',
        'Nới lỏng quần áo',
        'Đảm bảo không khí lưu thông',
        'Gọi cấp cứu nếu không tỉnh sau 1 phút'
      ]},
    ],
    relatedPosts: [
      { id: '1', title: '5 cách phòng tránh bệnh học đường' },
      { id: '2', title: 'Chế độ dinh dưỡng cho học sinh tiểu học' },
    ],
  },
  {
    id: '4',
    title: 'Chăm sóc sức khỏe tâm lý cho học sinh',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    author: 'Chuyên gia tâm lý',
    date: '04/06/2024',
    category: 'Sức khỏe tâm lý',
    views: 2345,
    likes: 198,
    comments: 45,
    rating: 4.7,
    tags: ['Tâm lý', 'Stress', 'Học tập'],
    readTime: '8 phút',
    content: [
      { type: 'paragraph', text: 'Sức khỏe tâm lý đóng vai trò quan trọng trong sự phát triển toàn diện của học sinh. Việc chăm sóc sức khỏe tâm lý giúp các em có thể học tập và phát triển tốt nhất.' },
      { type: 'heading', level: 4, text: '1. Dấu hiệu cần quan tâm' },
      { type: 'list', items: [
        'Thay đổi tâm trạng thất thường',
        'Khó tập trung trong học tập',
        'Mất ngủ hoặc ngủ quá nhiều',
        'Thay đổi thói quen ăn uống',
        'Tự cô lập với bạn bè'
      ]},
      { type: 'heading', level: 4, text: '2. Cách hỗ trợ học sinh' },
      { type: 'list', items: [
        'Lắng nghe và chia sẻ với học sinh',
        'Tạo môi trường học tập thoải mái',
        'Khuyến khích hoạt động thể chất',
        'Dạy kỹ năng quản lý stress',
        'Phối hợp với phụ huynh'
      ]},
      { type: 'heading', level: 4, text: '3. Các hoạt động thư giãn' },
      { type: 'list', items: [
        'Tập hít thở sâu',
        'Vẽ tranh, tô màu',
        'Nghe nhạc thư giãn',
        'Tập yoga đơn giản',
        'Chơi các trò chơi vận động'
      ]},
    ],
    relatedPosts: [
      { id: '1', title: '5 cách phòng tránh bệnh học đường' },
      { id: '2', title: 'Chế độ dinh dưỡng cho học sinh tiểu học' },
    ],
  },
]; 