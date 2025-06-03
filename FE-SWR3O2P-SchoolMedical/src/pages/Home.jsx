import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeTab, setActiveTab] = useState('students');

  const features = [
    {
      title: 'Quản lý hồ sơ sức khỏe',
      description: 'Lưu trữ và quản lý toàn diện thông tin sức khỏe của học sinh, bao gồm các chỉ số sức khỏe, tiền sử bệnh, và dị ứng.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: 'Quản lý tiêm chủng',
      description: 'Theo dõi lịch tiêm chủng, gửi thông báo nhắc nhở, và cập nhật trạng thái tiêm chủng của học sinh.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
    },
    {
      title: 'Khám sức khỏe định kỳ',
      description: 'Lập kế hoạch, quản lý và theo dõi các đợt khám sức khỏe định kỳ tại trường học.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Báo cáo và thống kê',
      description: 'Tạo các báo cáo thống kê chi tiết về tình hình sức khỏe học sinh để hỗ trợ ra quyết định.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Kết nối phụ huynh',
      description: 'Tạo kênh liên lạc hiệu quả giữa nhà trường và phụ huynh về tình hình sức khỏe học sinh.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'An toàn và bảo mật',
      description: 'Đảm bảo an toàn và bảo mật thông tin sức khỏe của học sinh theo các tiêu chuẩn GDPR và HIPAA.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { title: "Học sinh", value: "15,000+", icon: "👨‍🎓" },
    { title: "Trường học", value: "50+", icon: "🏫" },
    { title: "Đợt khám", value: "200+", icon: "🩺" },
    { title: "Mũi tiêm", value: "45,000+", icon: "💉" }
  ];

  const testimonials = [
    {
      content: "Phần mềm giúp chúng tôi quản lý hồ sơ sức khỏe học sinh một cách hiệu quả, tiết kiệm thời gian và công sức rất nhiều.",
      author: "Nguyễn Văn A",
      role: "Hiệu trưởng Trường THCS XYZ",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      content: "Tôi có thể dễ dàng theo dõi lịch tiêm chủng của con và biết được kết quả khám sức khỏe định kỳ một cách nhanh chóng.",
      author: "Lê Thị B",
      role: "Phụ huynh học sinh",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      content: "Hệ thống thông báo nhắc nhở lịch tiêm chủng và khám sức khỏe rất hữu ích, giúp chúng tôi không bỏ lỡ các mốc quan trọng.",
      author: "Trần Văn C",
      role: "Y tá trường học",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg"
    }
  ];

  const teamMembers = [
    {
      name: 'Nguyễn Văn A',
      role: 'Giám đốc dự án',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      bio: 'Chuyên gia với hơn 15 năm kinh nghiệm trong lĩnh vực y tế học đường và quản lý hệ thống y tế.',
    },
    {
      name: 'Trần Thị B',
      role: 'Trưởng phòng kỹ thuật',
      avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
      bio: 'Kỹ sư phần mềm với chuyên môn về các hệ thống quản lý thông tin y tế và bảo mật dữ liệu.',
    },
    {
      name: 'Lê Văn C',
      role: 'Chuyên gia y tế',
      avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
      bio: 'Bác sĩ y khoa với chuyên môn về sức khỏe trẻ em và các chương trình tiêm chủng.',
    },
    {
      name: 'Phạm Thị D',
      role: 'Quản lý sản phẩm',
      avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
      bio: 'Chuyên gia về phát triển sản phẩm và tối ưu hóa trải nghiệm người dùng trong lĩnh vực y tế.',
    },
  ];

  const tabContent = {
    students: {
      title: "Dành cho học sinh & phụ huynh",
      description: "Dễ dàng tra cứu thông tin sức khỏe, lịch tiêm chủng và kết quả khám định kỳ. Nhận thông báo về các hoạt động y tế trong trường học.",
      image: "https://img.freepik.com/free-photo/school-children-having-medical-examination-with-nurse_23-2149190715.jpg?w=900&t=st=1684320001~exp=1684320601~hmac=7a3f7a0f7a8e6b9a9b9a8f6b9a8e6b9a"
    },
    schools: {
      title: "Dành cho nhà trường",
      description: "Quản lý toàn diện hồ sơ sức khỏe của học sinh, tổ chức các đợt khám sức khỏe và tiêm chủng. Báo cáo thống kê và phân tích dữ liệu nhanh chóng.",
      image: "https://img.freepik.com/free-photo/doctor-examines-school-girl-during-medical-check-up_23-2149190704.jpg?w=900&t=st=1684320034~exp=1684320634~hmac=7a3f7a0f7a8e6b9a9b9a8f6b9a8e6b9a"
    },
    healthcare: {
      title: "Dành cho đơn vị y tế",
      description: "Kết nối trực tiếp với các trường học, cập nhật thông tin y tế và lên kế hoạch cho các chương trình y tế học đường một cách hiệu quả.",
      image: "https://img.freepik.com/free-photo/doctor-examining-schoolboy-with-stethoscope_23-2149190694.jpg?w=900&t=st=1684320056~exp=1684320656~hmac=7a3f7a0f7a8e6b9a9b9a8f6b9a8e6b9a"
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative overflow-hidden w-full" style={{backgroundImage: "url('https://suns.com.vn/wp-content/uploads/2019/11/y-te-4.0-SUNS.jpg')", backgroundSize: 'cover', backgroundPosition: 'center top', minHeight: '100vh', height: '100vh', imageRendering: 'auto', paddingTop: '112px'}}>
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="relative z-10 flex flex-col h-full min-h-[40vh] pl-16 pt-60 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
            Phần mềm <span className="text-accent text-white">Quản lý Y tế</span> Học đường
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-2xl text-white/90">
            Giải pháp toàn diện giúp nhà trường quản lý sức khỏe học sinh hiệu quả,
            kết nối giữa nhà trường, phụ huynh và các đơn vị y tế.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary px-8 py-3 rounded-lg font-medium text-white border border-white/20 backdrop-blur-sm bg-primary hover:bg-primary/90 transition-all shadow-lg transform hover:scale-105">
              Bắt đầu sử dụng
            </button>
            <button className="px-8 py-3 rounded-lg font-medium text-primary bg-white hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105">
              Tìm hiểu thêm
            </button>
          </div>
        </div>
      </section>

      {/* Stats - ĐÃ DI CHUYỂN LÊN TRÊN */}
      <section className="mt-20 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="card text-center transform hover:scale-105 transition-all duration-300 py-8">
              <div className="text-4xl md:text-5xl mb-3">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sứ mệnh của chúng tôi */}
      <section className="relative overflow-hidden mb-16 w-full" style={{backgroundImage: "url('https://duhocisa.edu.vn/wp-content/uploads/2019/10/800nurse-walking-png-18.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '700px', imageRendering: 'auto'}}>
        <div className="absolute inset-0 bg-gradient-to-l from-white/80 via-white/60 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-end justify-center h-full min-h-[400px] pr-16 py-16 text-right">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Sứ mệnh của chúng tôi</h2>
            <div className="border-r-4 border-primary pr-4 mb-6 ml-auto">
              <p className="text-xl text-gray-600 dark:text-gray-400 italic">
                "Nâng cao chất lượng chăm sóc sức khỏe học đường thông qua công nghệ và kết nối"
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Hệ thống Quản lý Y tế Học đường ra đời với sứ mệnh cải thiện công tác chăm sóc sức khỏe cho học sinh
              thông qua việc số hóa quy trình quản lý, tạo ra một hệ sinh thái kết nối giữa nhà trường, 
              phụ huynh và các cơ quan y tế.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Chúng tôi tin rằng việc quản lý thông tin sức khỏe học sinh một cách khoa học và hệ thống
              sẽ góp phần phát hiện sớm các vấn đề sức khỏe, đảm bảo các chương trình tiêm chủng được thực hiện đầy đủ,
              và tạo cơ sở dữ liệu quan trọng cho các chính sách y tế học đường.
            </p>
          </div>
        </div>
      </section>

      {/* Tính năng của hệ thống */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Tính năng của hệ thống</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="card hover:shadow-xl transition-all duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Đội ngũ của chúng tôi */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Đội ngũ của chúng tôi</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="card text-center hover:shadow-xl transition-all duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <img 
                src={member.avatar} 
                alt={member.name} 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary/20"
              />
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Phản hồi từ người dùng</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card hover:shadow-xl transition-all duration-300">
              <div className="mb-4">
                <svg className="h-8 w-8 text-primary opacity-30" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 italic">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent p-10 text-center text-white">
        <h2 className="text-3xl font-bold mb-4 text-white">Cải thiện quản lý sức khỏe học sinh</h2>
        <p className="mb-8 max-w-2xl mx-auto text-white/90">
          Hệ thống quản lý y tế học đường giúp theo dõi sức khỏe của học sinh một cách khoa học,
          kịp thời phát hiện các vấn đề sức khỏe và đưa ra giải pháp phù hợp.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            Liên hệ tư vấn
          </button>
          <button className="bg-transparent border border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            Xem demo
          </button>
        </div>
      </section>
    </div>
  );
}
