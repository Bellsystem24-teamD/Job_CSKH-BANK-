// --- DATA: DỮ LIỆU CÔNG VIỆC ---
const jobsData = [
    {
        id: 'uob-consultant',
        title: 'Nhân Viên Tư Vấn Thẻ Tín Dụng',
        bank: 'UOB',
        logo: 'logo_uob.jpg',
        color: 'text-blue-900',
        type: 'Full-time',
        salary: '15 - 20 Triệu ++',
        location: 'Cầu Giấy, Hà Nội',
        address: 'Tầng 3, Tòa nhà Trung Yên 1, Số 1A Vũ Phạm Hàm, Cầu Giấy',
        videoId: 'video_uob.mp4',
        desc: 'Thực hiện cuộc gọi ra cho Khách hàng theo Data có sẵn (do công ty cung cấp)<br> Giới thiệu, tư vấn các sản phẩm thẻ tín dụng, thẻ ATM, khoản vay của UOB. <br>Trao đổi quyền lợi, chương trình khuyến mãi.',
        req: 'Nam/Nữ 18-35 tuổi. <br>Không nợ xấu ngân hàng. <br>Giao tiếp nhanh nhẹn, cầu thị. <br>Ưu tiên có kinh nghiệm Sale/Telesale > 1 năm (Chưa có sẽ được đào tạo).',
        benefit: 'Thu nhập KHÔNG GIỚI HẠN (Lương cứng + Hoa hồng). <br>Đào tạo 5 ngày có hỗ trợ. <br>Lộ trình thăng tiến rõ ràng lên Leader/Manager. <br>BHXH đầy đủ.',
        time: 'T2-T6 (8h00-17h00). <br>Làm 2 ngày T7/tháng. <br>Nghỉ Lễ Tết.'
    },
    {
        id: 'uob-intern',
        title: 'Thực Tập Sinh Telesales',
        bank: 'UOB',
        logo: 'logo_uob.jpg',
        color: 'text-blue-900',
        type: 'Intern',
        salary: '2M + Incentive',
        location: 'Cầu Giấy, Hà Nội',
        address: 'Số 2A Vũ Phạm Hàm, Cầu Giấy, Hà Nội',
        videoId: 'video_uob.mp4',
        desc: 'Gọi điện tư vấn theo data công ty cung cấp (Talk time 2.5-3h/ngày). <br>Giới thiệu sản phẩm theo kịch bản. <br>Báo cáo kết quả hằng ngày.',
        req: 'Sinh viên năm cuối hoặc chờ bằng. <br>Thực tập tối thiểu 3 tháng. <br>Nhanh nhẹn, giọng dễ nghe. Định hướng theo ngành Ngân hàng.',
        benefit: 'Phụ cấp 2.000.000đ/tháng + Incentive (250k - 1.250k). <br>Dấu mộc thực tập. <br>Cơ hội lên nhân viên chính thức.',
        time: 'Full-time T2-T6 (8h30-17h30). Làm 2 ngày T7/tháng.'
    },
    {
        id: 'mb-cskh',
        title: 'CSKH Ngân Hàng Quân Đội',
        bank: 'MB Bank',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Logo_MB_new.png',
        color: 'text-blue-600',
        type: 'Full-time',
        salary: '7 - 9 Triệu',
        location: 'Đống Đa, Hà Nội',
        address: 'Tòa nhà MBBank - 21 Cát Linh, Đống Đa, Hà Nội',
        videoId: 'video_mbbank.mp4',
        desc: 'Tiếp nhận cuộc gọi giải đáp thắc mắc về dịch vụ thẻ. <br>Gọi ra hỗ trợ khách gọi nhỡ (khi có yêu cầu). <br>KHÔNG BÁN HÀNG, KHÔNG ÁP SỐ.',
        req: 'Tốt nghiệp Trung cấp trở lên (chấp nhận chờ bằng). <br>Giọng nói chuẩn, không ngọng, không giọng địa phương. <br>Nhanh nhẹn, hòa đồng.',
        benefit: 'Hỗ trợ 1.000.000đ/khóa đào tạo (10 ngày). <br>Thưởng lễ tết, BHXH, BHYT đầy đủ. <br>Môi trường trẻ trung.',
        time: 'Xoay ca luân phiên (có ca đêm, ca hành chính). <br>Nghỉ 1 ngày bất kỳ/tuần.'
    },
    {
        id: 'tpbank-full',
        title: 'CSKH TPBank (Full-time)',
        bank: 'TPBank',
        logo: 'logo_tpbank.jpg',
        color: 'text-purple-600',
        type: 'Full-time',
        salary: '7 - 9 Triệu',
        location: 'Hà Nội (3 CS)',
        address: 'Lựa chọn: 44 Lê Ngọc Hân / 155 Đội Cấn / Ngoại Giao Đoàn (Bắc Từ Liêm)',
        videoId: 'video_tpbank.mp4',
        desc: 'Tiếp nhận cuộc gọi đến, hỗ trợ giải đáp thắc mắc. <br>Tư vấn mở thẻ, tài khoản, e-banking. <br>KHÔNG BÁN HÀNG, KHÔNG ÁP DOANH SỐ.',
        req: '18-35 tuổi. <br>Tốt nghiệp Trung cấp trở lên. <br>Giọng dễ nghe, không ngọng. <br>Chấp nhận sinh viên năm cuối.',
        benefit: 'Hỗ trợ tài chính trong quá trình đào tạo. <br>Thưởng nóng, thưởng lễ tết. <br>Teambuilding, du lịch hàng năm.',
        time: 'Xoay ca trong khung 07h00 - 22h00. <br>Nghỉ 1 ngày/tuần.'
    },
    {
        id: 'tpbank-part',
        title: 'CSKH TPBank (Part-time)',
        bank: 'TPBank',
        logo: 'logo_tpbank.jpg',
        color: 'text-purple-600',
        type: 'Part-time',
        salary: '3 - 5 Triệu',
        location: 'Hà Nội (3 CS)',
        address: 'Lựa chọn: 44 Lê Ngọc Hân / 155 Đội Cấn / Ngoại Giao Đoàn (Bắc Từ Liêm)',
        videoId: 'video_tpbank.mp4',
        desc: 'Hỗ trợ khách hàng qua điện thoại. <br>Tư vấn dịch vụ thẻ, tài khoản. <br>Không yêu cầu bán hàng.',
        req: 'Sinh viên năm 3, 4. <br>Giọng dễ nghe, không ngọng, không giọng địa phương.',
        benefit: 'Hỗ trợ đào tạo 120.000đ/ngày (7 ngày). <br>Cơ hội trở thành nhân viên chính thức.',
        time: 'Ca tối: 17h-21h hoặc 18h-22h. <br>Tuần nghỉ 1 ngày.'
    },
    {
        id: 'bidv-consultant',
        title: 'Nhân Viên Tư Vấn BIDV',
        bank: 'BIDV',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Logo_BIDV.svg/2560px-Logo_BIDV.svg.png',
        color: 'text-green-600',
        type: 'Full-time',
        salary: '7 - 8 Triệu',
        location: 'Long Biên, HN',
        address: 'Tòa BIDV Tower, 545 Nguyễn Văn Cừ, Long Biên, Hà Nội',
        videoId: 'video_bidv.mp4',
        desc: 'Gọi điện theo data BIDV cung cấp. <br>Giới thiệu CTKM, hướng dẫn mở thẻ, hồ sơ yêu cầu.<br> Cập nhật kết quả lên hệ thống.',
        req: 'Giọng nói chuẩn, không ngọng. <br>Kỹ năng giao tiếp tốt. <br>Có trách nhiệm.',
        benefit: 'Nhận 100% lương thử việc. <br>Hỗ trợ chi phí đào tạo 700k/khóa. <br>BHXH theo quy định.',
        time: 'Hành chính: 8h00 - 17h30 (T2-T7). <br>Nghỉ CN và Lễ Tết.'
    },
    {
        id: 'lpbank-cskh',
        title: 'CSKH LPBank',
        bank: 'LPBank',
        logo: 'logo_lpbank.jpg',
        color: 'text-yellow-600',
        type: 'Full-time',
        salary: '7 - 9 Triệu',
        location: 'Đống Đa, Hà Nội',
        address: '135 Xã Đàn, Phường Kim Liên, Hà Nội',
        videoId: 'video_lpbank.mp4',
        desc: 'Tiếp nhận cuộc gọi, giải đáp thắc mắc dịch vụ. <br>KHÔNG SALE, KHÔNG ÁP SỐ.',
        req: 'Tốt nghiệp Trung cấp trở lên. <br>Thành thạo tin học văn phòng. <br>Giọng chuẩn miền Bắc.',
        benefit: 'Hỗ trợ đào tạo 100k/ngày (8 ngày). <br>BHXH sau 2 tháng. <br>Thưởng nóng, lễ tết, sinh nhật.',
        time: 'Xoay ca 24/7 (Ca sáng/chiều/tối/đêm).<br> Nghỉ 1 ngày/tuần.'
    },
    {
        id: 'vetc-cskh',
        title: 'CSKH Tổng Đài VETC',
        bank: 'VETC',
        logo: 'logo_vetc.png',
        color: 'text-orange-600',
        type: 'Full-time',
        salary: '~ 7.3 Triệu',
        location: 'Long Biên, HN',
        address: 'Số 7-9 Nguyễn Văn Linh, Long Biên, Hà Nội',
        videoId: 'video_vetc.mp4',
        desc: 'Giải đáp thắc mắc dịch vụ thu phí không dừng VETC, định danh tài khoản. <br>KHÔNG BÁN HÀNG.',
        req: 'Từ 18 tuổi, ưu tiên Nam. <br>Tin học cơ bản. <br>Có kinh nghiệm CSKH > 3 tháng là lợi thế.',
        benefit: 'Hỗ trợ đào tạo 100k/ngày. <br>Môi trường trẻ trung. <br>Trang thiết bị đầy đủ.',
        time: 'Xoay ca (có ca đêm, ca hành chính). <br>Tuần nghỉ 1 ngày.'
    },
];

// --- HELPER: PRINT STYLES FOR CV ---
const injectPrintStyles = () => {
    if (!document.getElementById('cv-print-style')) {
        const style = document.createElement('style');
        style.id = 'cv-print-style';
        style.innerHTML = `
            @media print {
                body * { visibility: hidden; }
                #cv-preview-container, #cv-preview-container * { visibility: visible; }
                #cv-preview-container { 
                    position: absolute; 
                    left: 0; 
                    top: 0; 
                    width: 100%; 
                    margin: 0; 
                    padding: 0; 
                    box-shadow: none;
                    border: none;
                }
                @page { margin: 0; }
            }
        `;
        document.head.appendChild(style);
    }
};

// --- VIEWS: GIAO DIỆN (TEMPLATES) ---

// 1. HOME VIEW
const HomeView = () => `
    <!-- Hero Section -->
    <section class="relative pt-12 pb-16 px-4 text-center">
        <div class="max-w-5xl mx-auto z-10 animate-fade-up">
            <span class="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-purple-200 text-purple-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Đang tuyển dụng 2025
            </span>
            
            <h1 class="text-5xl md:text-7xl font-display font-black mb-6 leading-tight text-slate-900 tracking-tight">
                Khởi Đầu Sự Nghiệp <br>
                <span class="animate-title-reveal py-1">Tài Chính Ngân Hàng</span>
            </h1>
            
            <p class="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Gia nhập BELLSYSTEM24 - Đối tác chiến lược của MB, UOB, TPBank, BIDV. Môi trường làm việc chuẩn Gen Z, thu nhập hấp dẫn và lộ trình thăng tiến rõ ràng.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                <button onclick="router.navigate('jobs')" class="btn-primary py-4 px-8 rounded-full text-lg font-bold shadow-lg shadow-purple-200 flex items-center justify-center gap-2 min-w-[200px]">
                    Xem Việc Làm Ngay <i class="fa-solid fa-arrow-right"></i>
                </button>
                
                <!-- NÚT TẠO CV ONLINE -->
                <button onclick="router.navigate('cv-builder')" class="py-4 px-8 rounded-full bg-white text-purple-600 font-bold border border-purple-200 hover:bg-purple-50 transition shadow-sm flex items-center justify-center gap-2 min-w-[200px]">
                    <i class="fa-solid fa-file-pen"></i> Tạo CV Online
                </button>

                <a href="https://www.facebook.com/profile.php?id=61584435535860" target="_blank" class="py-4 px-8 rounded-full bg-white text-slate-700 font-bold border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition shadow-sm flex items-center justify-center gap-2 min-w-[200px]">
                    <i class="fa-brands fa-facebook"></i> Chat với HR
                </a>
            </div>
        </div>
    </section>

    <!-- Partners Marquee (Dải Logo Chạy Động) - NỔI BẬT KHU VỰC TRỐNG -->
    <section class="py-16 overflow-hidden relative border-y border-slate-200/50 bg-white/40 backdrop-blur-sm">
        <p class="text-center text-slate-400 text-xs font-bold uppercase tracking-[0.3em] mb-10 animate-fade-up">
            Được tin tưởng bởi các định chế tài chính hàng đầu
        </p>
        
        <div class="relative w-full max-w-full overflow-hidden">
            <!-- Hiệu ứng mờ 2 bên -->
            <div class="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#f0f9ff] to-transparent z-10 pointer-events-none"></div>
            <div class="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#f0f9ff] to-transparent z-10 pointer-events-none"></div>

            <div class="flex whitespace-nowrap animate-scroll w-max group">
                <!-- Group 1 -->
                <div class="flex gap-16 mx-10 items-center">
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-blue-100 border border-slate-100">
                            <img src="logo_uob.jpg" class="w-full h-full object-contain" alt="UOB">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">UOB Bank</span>
                    </div>
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-blue-100 border border-slate-100">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Logo_MB_new.png" class="w-full h-full object-contain" alt="MB">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">MB Bank</span>
                    </div>
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-purple-100 border border-slate-100">
                            <img src="logo_tpbank.jpg" class="w-full h-full object-contain" alt="TPBank">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">TPBank</span>
                    </div>
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-green-100 border border-slate-100">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Logo_BIDV.svg/2560px-Logo_BIDV.svg.png" class="w-full h-full object-contain" alt="BIDV">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">BIDV</span>
                    </div>
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-orange-100 border border-slate-100">
                            <img src="logo_vetc.png" class="w-full h-full object-contain" alt="VETC">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">VETC</span>
                    </div>
                </div>
                
                <!-- Group 2 (Duplicate for Infinite Loop) -->
                <div class="flex gap-16 mx-10 items-center">
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-blue-100 border border-slate-100">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/UOB_Logo.svg/2560px-UOB_Logo.svg.png" class="w-full h-full object-contain" alt="UOB">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">UOB Bank</span>
                    </div>
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-blue-100 border border-slate-100">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/25/Logo_MB_new.png" class="w-full h-full object-contain" alt="MB">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">MB Bank</span>
                    </div>
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-purple-100 border border-slate-100">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Logo-TPBank-Moi-Nhat-Purple-RGB.png/1200px-Logo-TPBank-Moi-Nhat-Purple-RGB.png" class="w-full h-full object-contain" alt="TPBank">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">TPBank</span>
                    </div>
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-green-100 border border-slate-100">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Logo_BIDV.svg/2560px-Logo_BIDV.svg.png" class="w-full h-full object-contain" alt="BIDV">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">BIDV</span>
                    </div>
                    <div class="flex items-center gap-3 transition duration-300 hover:scale-110 cursor-pointer">
                        <div class="w-20 h-20 rounded-2xl bg-white p-3 flex items-center justify-center shadow-lg shadow-orange-100 border border-slate-100">
                            <img src="https://vetc.com.vn/assets/images/logo.png" class="w-full h-full object-contain" alt="VETC">
                        </div>
                        <span class="text-xl font-display font-bold text-slate-800">VETC</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Features Grid Redesigned -->
    <section id="about" class="relative py-24 px-4 max-w-7xl mx-auto overflow-hidden">
        <div class="absolute top-1/2 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-50/50 to-transparent -z-10 pointer-events-none"></div>
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            
            <!-- Left Column: Interactive Cards Grid -->
            <div class="order-2 lg:order-1 relative">
                <div class="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-3xl opacity-40 animate-pulse-glow -z-10"></div>
                
                <div class="grid grid-cols-2 gap-6">
                    <div class="glass-card p-6 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-200/50 group animate-fade-up" style="animation-delay: 0.1s;">
                        <div class="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-500 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                            <i class="fa-solid fa-bolt"></i>
                        </div>
                        <h3 class="font-display font-bold text-slate-800 text-lg mb-2">Gen Z Style</h3>
                        <p class="text-sm text-slate-500 leading-relaxed">Môi trường trẻ, năng động, thoải mái sáng tạo, không gò bó.</p>
                    </div>
                    <div class="glass-card p-6 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-200/50 mt-12 group animate-fade-up" style="animation-delay: 0.3s;">
                        <div class="w-14 h-14 rounded-2xl bg-purple-50 text-purple-500 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-500">
                            <i class="fa-solid fa-sack-dollar"></i>
                        </div>
                        <h3 class="font-display font-bold text-slate-800 text-lg mb-2">Thu nhập Đỉnh</h3>
                        <p class="text-sm text-slate-500 leading-relaxed">Lương cứng cạnh tranh + Thưởng KPI không giới hạn.</p>
                    </div>
                    <div class="glass-card p-6 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-200/50 group animate-fade-up" style="animation-delay: 0.2s;">
                        <div class="w-14 h-14 rounded-2xl bg-pink-50 text-pink-500 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all duration-500">
                            <i class="fa-solid fa-graduation-cap"></i>
                        </div>
                        <h3 class="font-display font-bold text-slate-800 text-lg mb-2">Đào tạo A-Z</h3>
                        <p class="text-sm text-slate-500 leading-relaxed">Chưa có kinh nghiệm? Đừng lo, bạn sẽ được cầm tay chỉ việc.</p>
                    </div>
                    <div class="glass-card p-6 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-200/50 mt-12 group animate-fade-up" style="animation-delay: 0.4s;">
                        <div class="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                            <i class="fa-solid fa-rocket"></i>
                        </div>
                        <h3 class="font-display font-bold text-slate-800 text-lg mb-2">Lộ Trình Rõ Ràng</h3>
                        <p class="text-sm text-slate-500 leading-relaxed">Cơ hội thăng tiến lên Leader, Manager minh bạch.</p>
                    </div>
                </div>
            </div>

            <!-- Right Column -->
            <div class="order-1 lg:order-2 pl-0 lg:pl-10">
                <span class="inline-block py-1 px-3 rounded-lg bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-widest mb-4 animate-fade-up">Về chúng tôi</span>
                <h2 class="text-4xl md:text-5xl font-display font-black text-slate-900 mb-6 leading-[1.2] animate-fade-up" style="animation-delay: 0.1s;">
                    Nơi Bạn Được <br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">Là Chính Mình</span>
                </h2>
                <p class="text-lg text-slate-600 mb-8 leading-relaxed animate-fade-up" style="animation-delay: 0.2s;">
                    Tại BELLSYSTEM24, chúng tôi không chỉ tuyển nhân viên, chúng tôi tìm kiếm đồng đội. Đây là nơi bạn rèn luyện kỹ năng giao tiếp, nghiệp vụ tài chính và tư duy dịch vụ chuyên nghiệp.
                </p>
                <ul class="space-y-5 animate-fade-up" style="animation-delay: 0.3s;">
                    <li class="flex items-start gap-4 group">
                        <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 group-hover:bg-green-500 transition-colors duration-300">
                            <i class="fa-solid fa-check text-green-600 text-xs group-hover:text-white"></i>
                        </div>
                        <span class="font-medium text-slate-700 text-lg">Chấp nhận sinh viên năm cuối, chờ bằng.</span>
                    </li>
                    <li class="flex items-start gap-4 group">
                        <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 group-hover:bg-green-500 transition-colors duration-300">
                            <i class="fa-solid fa-check text-green-600 text-xs group-hover:text-white"></i>
                        </div>
                        <span class="font-medium text-slate-700 text-lg">Văn phòng xịn xò, Pantry ngập tràn đồ ăn.</span>
                    </li>
                    <li class="flex items-start gap-4 group">
                        <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1 group-hover:bg-green-500 transition-colors duration-300">
                            <i class="fa-solid fa-check text-green-600 text-xs group-hover:text-white"></i>
                        </div>
                        <span class="font-medium text-slate-700 text-lg">Teambuilding, Party cực "cháy" hàng năm.</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
`;

// 2. JOBS LIST VIEW
const JobsView = () => `
    <section class="max-w-7xl mx-auto px-4 py-12 min-h-screen">
        <div class="text-center mb-16 animate-fade-up">
            <h2 class="text-3xl md:text-4xl font-display font-bold mb-4 text-slate-900">Danh Sách <span class="text-gradient">Việc Làm</span></h2>
            <p class="text-slate-500 text-lg">Tìm kiếm vị trí phù hợp với "gu" của bạn.</p>
        </div>

        <div class="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-xl shadow-purple-100/50 mb-12 flex flex-col md:flex-row gap-2 animate-fade-up sticky top-24 z-30 border border-slate-100" style="animation-delay: 0.1s;">
            <div class="flex-1 relative">
                <i class="fa-solid fa-magnifying-glass absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                <input type="text" id="searchInput" placeholder="Tìm kiếm (VD: UOB, CSKH, Part-time...)" 
                    class="w-full pl-12 pr-4 py-4 bg-transparent rounded-xl focus:outline-none text-slate-700 font-medium placeholder-slate-400">
            </div>
            <div class="w-full md:w-px h-px md:h-10 bg-slate-200 self-center"></div>
            <div class="w-full md:w-64">
                <select id="bankFilter" class="w-full h-full px-4 py-4 bg-transparent rounded-xl focus:outline-none cursor-pointer text-slate-700 font-medium appearance-none">
                    <option value="all">Tất cả Ngân hàng</option>
                    <option value="UOB">UOB Bank</option>
                    <option value="TPBank">TPBank</option>
                    <option value="BIDV">BIDV</option>
                    <option value="MB Bank">MB Bank</option>
                    <option value="LPBank">LPBank</option>
                    <option value="VETC">VETC</option>
                    <option value="VIB">VIB</option>
                </select>
            </div>
            <button onclick="handleSearch()" class="btn-primary rounded-xl px-8 py-3 font-bold md:w-auto w-full">
                Tìm Ngay
            </button>
        </div>

        <!-- Job Grid -->
        <div id="jobGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
            <!-- Cards will be injected here -->
        </div>

        <!-- No Results -->
        <div id="noResults" class="hidden text-center py-20">
            <div class="inline-block p-6 rounded-full bg-slate-100 mb-4">
                <i class="fa-solid fa-magnifying-glass-location text-4xl text-slate-400"></i>
            </div>
            <p class="text-lg text-slate-500 font-medium">Chưa tìm thấy công việc phù hợp.</p>
        </div>
    </section>
`;

// 3. JOB DETAIL VIEW (Đã sửa để dùng thẻ VIDEO cho MP4)
const JobDetailView = (job) => `
    <section class="max-w-5xl mx-auto px-4 py-8 min-h-screen animate-fade-up">
        <!-- Back Button -->
        <button onclick="router.navigate('jobs')" class="mb-8 flex items-center gap-2 text-slate-500 hover:text-purple-600 transition font-medium group bg-white px-4 py-2 rounded-lg shadow-sm">
            <i class="fa-solid fa-arrow-left group-hover:-translate-x-1 transition"></i> Quay lại danh sách
        </button>
        
        <div class="bg-white rounded-[2.5rem] shadow-2xl shadow-purple-100/50 overflow-hidden border border-slate-100 relative">
            
            <!-- Header -->
            <div class="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 text-white relative overflow-hidden">
                <div class="absolute right-0 top-0 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
                <div class="relative z-10">
                    <div class="flex flex-wrap items-center gap-3 mb-6">
                        <span class="bg-white/10 backdrop-blur border border-white/20 px-3 py-1 rounded-lg text-sm font-medium flex items-center gap-2">
                            <img src="${job.logo}" class="w-5 h-5 object-contain" alt="Logo"> ${job.bank}
                        </span>
                        <span class="bg-purple-600/80 backdrop-blur px-3 py-1 rounded-lg text-sm font-bold shadow-lg shadow-purple-500/30 text-white border border-purple-400">
                            ${job.type}
                        </span>
                    </div>
                    
                    <h1 class="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">${job.title}</h1>
                    
                    <div class="flex flex-col md:flex-row gap-8 mt-8 pt-8 border-t border-white/10">
                        <div>
                            <p class="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Mức lương</p>
                            <p class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-400">${job.salary}</p>
                        </div>
                        <div>
                            <p class="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">Địa điểm</p>
                            <p class="text-lg font-medium text-white">${job.location}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex flex-col lg:flex-row">
                <!-- Main Content -->
                <div class="p-8 md:p-12 flex-1 space-y-10">
                    <!-- Section Mô tả -->
                    <div>
                        <h3 class="text-xl font-bold text-slate-800 flex items-center gap-3 mb-4">
                            <span class="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><i class="fa-solid fa-file-lines"></i></span>
                            Mô tả công việc
                        </h3>
                        <p class="text-slate-600 leading-relaxed text-justify bg-slate-50 p-6 rounded-2xl border border-slate-100">
                            ${job.desc}
                        </p>
                    </div>

                    <!-- Section Thời gian & Địa điểm -->
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2 mb-3">
                                <i class="fa-solid fa-clock text-purple-500"></i> Thời gian
                            </h3>
                            <p class="text-slate-600 text-sm leading-relaxed">${job.time}</p>
                        </div>
                        <div>
                            <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2 mb-3">
                                <i class="fa-solid fa-location-dot text-red-500"></i> Địa chỉ chi tiết
                            </h3>
                            <p class="text-slate-600 text-sm leading-relaxed">${job.address}</p>
                        </div>
                    </div>

                    <!-- Section Yêu cầu -->
                    <div>
                        <h3 class="text-xl font-bold text-slate-800 flex items-center gap-3 mb-4">
                            <span class="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center"><i class="fa-solid fa-user-check"></i></span>
                            Yêu cầu ứng viên
                        </h3>
                        <div class="bg-orange-50/50 p-6 rounded-2xl border border-orange-100 text-slate-700 leading-relaxed">
                            ${job.req}
                        </div>
                    </div>

                    <!-- Section Quyền lợi -->
                    <div>
                        <h3 class="text-xl font-bold text-slate-800 flex items-center gap-3 mb-4">
                            <span class="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center"><i class="fa-solid fa-gift"></i></span>
                            Quyền lợi (Benefits)
                        </h3>
                        <div class="bg-green-50/50 p-6 rounded-2xl border border-green-100 text-slate-700 leading-relaxed">
                            ${job.benefit}
                        </div>
                    </div>

                    <!-- NEW: Section Video MP4 Local -->
                    <div>
                         <h3 class="text-xl font-bold text-slate-800 flex items-center gap-3 mb-4">
                            <span class="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center"><i class="fa-solid fa-video"></i></span>
                            Góc nhìn công việc (Video)
                        </h3>
                        <div class="video-wrapper bg-slate-100 rounded-2xl overflow-hidden shadow-inner border border-slate-100 relative" style="padding-bottom: 56.25%; height: 0;">
                            <!-- Sử dụng thẻ VIDEO cho file MP4 -->
                            <video controls autoplay loop class="absolute top-0 left-0 w-full h-full object-cover">
                                <source src="${job.videoId}" type="video/mp4">
                                Trình duyệt của bạn không hỗ trợ thẻ video.
                            </video>
                        </div>
                        <p class="text-sm text-slate-400 mt-2 italic text-center">Video giới thiệu môi trường làm việc thực tế.</p>
                    </div>

                </div>

                <!-- Sidebar CTA -->
                <div class="lg:w-80 bg-slate-50 p-8 border-l border-slate-100 flex flex-col items-center">
                    <div class="sticky top-24 w-full">
                        <p class="text-slate-500 text-sm mb-6 text-center">Bạn đã sẵn sàng gia nhập?</p>
                        
                        <a href="https://www.facebook.com/profile.php?id=61584435535860" target="_blank" 
                           class="group block w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg text-center shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] transition duration-300 animate-pulse-glow">
                            ỨNG TUYỂN NGAY <i class="fa-solid fa-paper-plane ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </a>
                        
                        <p class="text-xs text-center text-slate-400 mt-4">
                            Click để chat trực tiếp với bộ phận Tuyển dụng qua Facebook.
                        </p>

                        <div class="mt-8 pt-8 border-t border-slate-200 w-full">
                            <h4 class="font-bold text-slate-700 mb-4">Lưu ý khi ứng tuyển:</h4>
                            <ul class="text-sm text-slate-500 space-y-2 list-disc pl-4">
                                <li>Chuẩn bị sẵn CV (nếu có).</li>
                                <li>Trang phục lịch sự khi phỏng vấn.</li>
                                <li>Đọc kỹ JD trước khi ứng tuyển.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

// 4. CV BUILDER VIEW (NEW - TOPCV STYLE)
const CVBuilderView = () => {
    injectPrintStyles(); // Inject CSS for printing
    return `
    <section class="max-w-7xl mx-auto px-4 py-8 min-h-screen flex flex-col lg:flex-row gap-8 bg-slate-50 animate-fade-up">
        <!-- LEFT: EDITOR FORM -->
        <div class="lg:w-1/3 space-y-6 h-fit sticky top-24">
            <div class="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                <h2 class="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2"><i class="fa-solid fa-pen-to-square text-purple-600"></i> Nhập thông tin</h2>
                
                <div class="space-y-4">
                    <!-- Personal Info -->
                    <div class="space-y-2">
                        <label class="text-xs font-bold text-slate-500 uppercase">Họ và tên</label>
                        <input type="text" oninput="window.updateCV('cv-name', this.value)" placeholder="Nguyễn Văn A" class="w-full p-3 rounded-lg border border-slate-200 focus:border-purple-500 focus:outline-none text-sm">
                    </div>
                    <div class="space-y-2">
                        <label class="text-xs font-bold text-slate-500 uppercase">Vị trí ứng tuyển</label>
                        <input type="text" oninput="window.updateCV('cv-title', this.value)" placeholder="Nhân viên CSKH" class="w-full p-3 rounded-lg border border-slate-200 focus:border-purple-500 focus:outline-none text-sm">
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-2">
                            <label class="text-xs font-bold text-slate-500 uppercase">Email</label>
                            <input type="text" oninput="window.updateCV('cv-email', this.value)" placeholder="email@gmail.com" class="w-full p-3 rounded-lg border border-slate-200 focus:border-purple-500 focus:outline-none text-sm">
                        </div>
                        <div class="space-y-2">
                            <label class="text-xs font-bold text-slate-500 uppercase">Số điện thoại</label>
                            <input type="text" oninput="window.updateCV('cv-phone', this.value)" placeholder="0912 345 678" class="w-full p-3 rounded-lg border border-slate-200 focus:border-purple-500 focus:outline-none text-sm">
                        </div>
                    </div>

                    <!-- Dynamic Sections (Simplified for Demo) -->
                    <div class="space-y-2">
                        <label class="text-xs font-bold text-slate-500 uppercase">Mục tiêu nghề nghiệp</label>
                        <textarea oninput="window.updateCV('cv-objective', this.value)" rows="3" placeholder="Mong muốn làm việc trong môi trường chuyên nghiệp..." class="w-full p-3 rounded-lg border border-slate-200 focus:border-purple-500 focus:outline-none text-sm"></textarea>
                    </div>

                    <div class="space-y-2">
                        <label class="text-xs font-bold text-slate-500 uppercase">Kinh nghiệm làm việc</label>
                        <textarea oninput="window.updateCV('cv-exp', this.value)" rows="4" placeholder="- 2022-2024: Nhân viên CSKH tại Cty ABC..." class="w-full p-3 rounded-lg border border-slate-200 focus:border-purple-500 focus:outline-none text-sm"></textarea>
                    </div>

                    <div class="space-y-2">
                        <label class="text-xs font-bold text-slate-500 uppercase">Kỹ năng</label>
                        <textarea oninput="window.updateCV('cv-skills', this.value)" rows="3" placeholder="- Giao tiếp tốt&#10;- Tin học văn phòng" class="w-full p-3 rounded-lg border border-slate-200 focus:border-purple-500 focus:outline-none text-sm"></textarea>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">
                    <button onclick="window.print()" class="w-full py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition flex items-center justify-center gap-2">
                        <i class="fa-solid fa-download"></i> Tải PDF / In CV
                    </button>
                    <button onclick="window.router.navigate('home')" class="w-full py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition">
                        Quay lại trang chủ
                    </button>
                </div>
            </div>
        </div>

        <!-- RIGHT: CV PREVIEW (A4 Paper Style) -->
        <div class="lg:w-2/3 overflow-auto flex justify-center bg-slate-200/50 p-4 rounded-2xl border border-slate-200">
            <div id="cv-preview-container" class="bg-white w-[210mm] min-h-[297mm] shadow-2xl p-10 flex flex-col relative text-slate-800">
                <!-- Header -->
                <div class="flex items-start justify-between border-b-2 border-purple-600 pb-8 mb-8">
                    <div>
                        <h1 id="cv-name" class="text-4xl font-black text-slate-900 uppercase tracking-tight mb-2">NGUYỄN VĂN A</h1>
                        <p id="cv-title" class="text-xl font-medium text-purple-600 uppercase tracking-wider">NHÂN VIÊN CSKH</p>
                    </div>
                    <div class="text-right text-sm space-y-1 text-slate-500">
                        <p id="cv-email" class="flex items-center justify-end gap-2"><i class="fa-solid fa-envelope text-purple-500"></i> email@gmail.com</p>
                        <p id="cv-phone" class="flex items-center justify-end gap-2"><i class="fa-solid fa-phone text-purple-500"></i> 0912 345 678</p>
                    </div>
                </div>

                <!-- Content Grid -->
                <div class="grid grid-cols-3 gap-8 flex-grow">
                    
                    <!-- Left Sidebar of CV -->
                    <div class="col-span-1 space-y-8 border-r border-slate-100 pr-4">
                        <div>
                            <h3 class="text-sm font-bold uppercase text-slate-900 border-b-2 border-slate-200 pb-1 mb-3">Mục tiêu</h3>
                            <p id="cv-objective" class="text-sm text-slate-600 leading-relaxed text-justify whitespace-pre-line">Mong muốn làm việc trong môi trường chuyên nghiệp...</p>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold uppercase text-slate-900 border-b-2 border-slate-200 pb-1 mb-3">Kỹ năng</h3>
                            <p id="cv-skills" class="text-sm text-slate-600 leading-relaxed whitespace-pre-line">- Giao tiếp tốt<br>- Tin học văn phòng</p>
                        </div>
                        <div>
                            <h3 class="text-sm font-bold uppercase text-slate-900 border-b-2 border-slate-200 pb-1 mb-3">Thông tin thêm</h3>
                            <p class="text-sm text-slate-600 leading-relaxed">Ngày sinh: 01/01/2000<br>Giới tính: Nam</p>
                        </div>
                    </div>

                    <!-- Main Content of CV -->
                    <div class="col-span-2 space-y-8">
                        <div>
                            <h3 class="text-lg font-bold uppercase text-purple-700 border-b-2 border-purple-100 pb-2 mb-4 flex items-center gap-2">
                                <i class="fa-solid fa-briefcase"></i> Kinh nghiệm làm việc
                            </h3>
                            <div id="cv-exp" class="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                                - 2022-2024: Nhân viên CSKH tại Cty ABC
                                + Tiếp nhận cuộc gọi khách hàng.
                                + Giải quyết khiếu nại.
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-bold uppercase text-purple-700 border-b-2 border-purple-100 pb-2 mb-4 flex items-center gap-2">
                                <i class="fa-solid fa-graduation-cap"></i> Học vấn
                            </h3>
                            <div class="text-sm text-slate-700 leading-relaxed">
                                <p class="font-bold">Đại học Thương Mại</p>
                                <p class="italic text-slate-500">Chuyên ngành: Quản trị kinh doanh (2018 - 2022)</p>
                                <p>- Tốt nghiệp loại Giỏi.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Footer Decor -->
                <div class="mt-auto pt-8 text-center text-xs text-slate-300 font-medium">
                    CV created via Bellsystem24 Career Site
                </div>
            </div>
        </div>
    </section>
    `;
};

// Function Update CV Realtime (Exposed Global)
window.updateCV = (id, value) => {
    const element = document.getElementById(id);
    if(element) {
        // Xử lý xuống dòng cho textarea
        element.innerText = value || element.getAttribute('placeholder') || '';
    }
};

// --- CORE LOGIC: ROUTER & RENDER ---

const createJobCard = (job) => {
    const tagClass = job.type === 'Full-time' ? 'bg-blue-100 text-blue-700' : (job.type === 'Intern' ? 'bg-green-100 text-green-700' : 'bg-pink-100 text-pink-700');
    
    return `
        <div class="job-card bg-white rounded-[1.5rem] p-6 cursor-pointer group flex flex-col h-full relative overflow-hidden border border-slate-100 shadow-sm" onclick="window.router.navigate('detail', '${job.id}')">
            <!-- Hover Effect -->
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            
            <div class="flex justify-between items-start mb-5">
                <div class="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-3xl ${job.color} group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition duration-300 shadow-sm">
                    <img src="${job.logo}" class="w-full h-full object-contain p-2" alt="Logo">
                </div>
                <span class="px-3 py-1 rounded-lg text-xs font-bold uppercase ${tagClass}">${job.type}</span>
            </div>
            
            <div class="mb-4">
                <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1"><i class="fa-solid fa-building"></i> ${job.bank}</p>
                <h3 class="text-lg font-bold text-slate-800 group-hover:text-purple-600 transition line-clamp-2 min-h-[3.5rem] leading-snug">${job.title}</h3>
            </div>

            <div class="mt-auto pt-4 border-t border-slate-100 space-y-3">
                <div class="flex items-center gap-2 text-sm text-slate-600">
                    <i class="fa-solid fa-wallet text-slate-400 w-5"></i>
                    <span class="font-bold text-slate-900">${job.salary}</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-slate-500">
                    <i class="fa-solid fa-location-dot text-slate-400 w-5"></i>
                    <span class="line-clamp-1">${job.location}</span>
                </div>
            </div>
        </div>
    `;
}

// Expose handleSearch to window to be accessible from HTML
window.handleSearch = () => {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const bank = document.getElementById('bankFilter').value;
    
    const filtered = jobsData.filter(job => {
        const matchKeyword = job.title.toLowerCase().includes(keyword) || 
                             job.bank.toLowerCase().includes(keyword) ||
                             job.type.toLowerCase().includes(keyword);
        const matchBank = bank === 'all' || job.bank === bank;
        return matchKeyword && matchBank;
    });

    const grid = document.getElementById('jobGrid');
    const noRes = document.getElementById('noResults');

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noRes.classList.remove('hidden');
    } else {
        noRes.classList.add('hidden');
        grid.innerHTML = filtered.map(createJobCard).join('');
        
        // Animation Stagger
        document.querySelectorAll('.job-card').forEach((card, index) => {
            card.style.opacity = '0';
            card.style.animation = `fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards ${index * 0.05}s`;
        });
    }
}

const app = document.getElementById('app');

const router = {
    navigate: (page, param = null) => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        
        if (page === 'home') {
            app.innerHTML = HomeView();
            if(param === 'about') {
                setTimeout(() => {
                    const section = document.getElementById('about');
                    if(section) section.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else if (page === 'jobs') {
            app.innerHTML = JobsView();
            window.handleSearch(); 
            
            document.getElementById('searchInput').addEventListener('input', window.handleSearch);
            document.getElementById('bankFilter').addEventListener('change', window.handleSearch);
        } else if (page === 'detail') {
            const job = jobsData.find(j => j.id === param);
            if (job) {
                app.innerHTML = JobDetailView(job);
            }
        } else if (page === 'cv-builder') { // New Route for CV Builder
            app.innerHTML = CVBuilderView();
        }
    }
};

// Expose router to window
window.router = router;

// Init App
document.addEventListener('DOMContentLoaded', () => {
    router.navigate('home');
});