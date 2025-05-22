import React from 'react';
import { motion } from 'framer-motion';

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

export default function About() {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl mb-16 bg-gradient-to-r from-primary to-secondary">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:16px_16px]"></div>
        <div className="relative z-10 py-16 px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Về Chúng Tôi</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
            Hệ thống Quản lý Y tế Học đường - Giải pháp toàn diện giúp nhà trường, phụ huynh
            và cơ quan y tế cùng chăm sóc sức khỏe học sinh hiệu quả.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-white to-white via-accent/30 opacity-30"></div>
      </section>

      {/* Giới thiệu */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Sứ mệnh của chúng tôi</h2>
            <div className="border-l-4 border-primary pl-4 mb-6">
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
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img 
              src="https://img.freepik.com/free-photo/doctor-examining-schoolboy-with-stethoscope_23-2149190694.jpg" 
              alt="Y tế học đường" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Tính năng */}
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

      {/* Đội ngũ */}
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

      {/* CTA */}
      <section className="rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent p-10 text-center text-white">
        <h2 className="text-3xl font-bold mb-4 text-white">Bắt đầu ngay hôm nay</h2>
        <p className="mb-8 max-w-2xl mx-auto text-white/90">
          Nâng cao chất lượng chăm sóc sức khỏe học sinh với hệ thống Quản lý Y tế Học đường.
          Liên hệ với chúng tôi để được tư vấn và hỗ trợ triển khai.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            Đăng ký dùng thử
          </button>
          <button className="bg-transparent border border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all">
            Liên hệ tư vấn
          </button>
        </div>
      </section>
    </div>
  );
}
