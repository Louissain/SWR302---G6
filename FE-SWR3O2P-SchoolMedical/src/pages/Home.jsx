import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [activeTab, setActiveTab] = useState('students');

  const features = [
    {
      title: "Hồ sơ sức khỏe học sinh",
      description: "Quản lý và tra cứu thông tin sức khỏe chi tiết cho từng học sinh",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      )
    },
    {
      title: "Quản lý tiêm chủng",
      description: "Theo dõi tiến độ tiêm chủng và lịch tiêm phòng cho học sinh",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Kiểm tra sức khỏe định kỳ",
      description: "Lên lịch và quản lý các đợt khám sức khỏe định kỳ trong trường học",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    }
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

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl mb-16 bg-gradient-to-r from-primary to-secondary">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:16px_16px]"></div>
        <div className="relative z-10 py-16 px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            Phần mềm <span className="text-accent">Quản lý Y tế</span> Học đường
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-white/90">
            Giải pháp toàn diện giúp nhà trường quản lý sức khỏe học sinh hiệu quả,
            kết nối giữa nhà trường, phụ huynh và các đơn vị y tế.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="btn-primary px-8 py-3 rounded-lg font-medium text-white border border-white/20 backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all shadow-lg transform hover:scale-105">
              Bắt đầu sử dụng
            </button>
            <button className="px-8 py-3 rounded-lg font-medium text-primary bg-white hover:bg-gray-100 transition-all shadow-lg transform hover:scale-105">
              Tìm hiểu thêm
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-r from-white to-white via-accent/30 opacity-30"></div>
        </div>
      </section>

      {/* Stats */}
      <section className="mb-16">
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

      {/* Tabs Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Giải pháp cho mọi đối tượng</h2>
        
        <div className="flex justify-center mb-6 border-b border-gray-200 dark:border-gray-700">
          <button
            className={`px-6 py-3 font-medium text-lg border-b-2 transition-all ${
              activeTab === 'students' 
                ? 'text-primary border-primary' 
                : 'text-gray-500 border-transparent hover:text-gray-700 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('students')}
          >
            Học sinh & Phụ huynh
          </button>
          <button
            className={`px-6 py-3 font-medium text-lg border-b-2 transition-all ${
              activeTab === 'schools' 
                ? 'text-primary border-primary' 
                : 'text-gray-500 border-transparent hover:text-gray-700 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('schools')}
          >
            Nhà trường
          </button>
          <button
            className={`px-6 py-3 font-medium text-lg border-b-2 transition-all ${
              activeTab === 'healthcare' 
                ? 'text-primary border-primary' 
                : 'text-gray-500 border-transparent hover:text-gray-700 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('healthcare')}
          >
            Đơn vị y tế
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center animate-fadeIn">
          <div>
            <h3 className="text-2xl font-bold mb-4">{tabContent[activeTab].title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{tabContent[activeTab].description}</p>
            <Link to="/about" className="btn-primary inline-flex items-center">
              Tìm hiểu thêm
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src={tabContent[activeTab].image} 
              alt={tabContent[activeTab].title} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">Tính năng nổi bật</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-primary/10 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
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
