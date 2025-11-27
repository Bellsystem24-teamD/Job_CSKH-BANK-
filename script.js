// ==============================================================
// 1. DỮ LIỆU CÔNG VIỆC CHUẨN XÁC [Đã làm sạch text]
// ==============================================================
const jobs = [
    {
        id: 1,
        title: "Nhân viên CSKH TPBank (Inbound)",
        bank: "TPBank",
        // Theme Tím - Sang trọng
        themeText: "text-purple-700",
        themeBg: "bg-purple-50",
        themeBtn: "bg-purple-600 hover:bg-purple-700",
        // Ảnh văn phòng hiện đại
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
        type: "Full-time",
        salary: "7.000.000đ - 9.000.000đ", 
        location: "Hà Nội", 
        desc: [
            "Tiếp nhận và xử lý cuộc gọi đến, giải đáp thắc mắc khách hàng chuyên nghiệp.",
            "Tư vấn dịch vụ: mở thẻ, tài khoản, E-banking, các sản phẩm khác.",
            "LƯU Ý: Không bán hàng – Không áp chỉ tiêu doanh số."
        ],
        req: [
            "Nam/Nữ 18–35 tuổi, Tốt nghiệp Trung cấp trở lên (chấp nhận SV năm cuối).",
            "Giao tiếp tốt, giọng nói dễ nghe, không ngọng.",
            "Không yêu cầu kinh nghiệm – được đào tạo bài bản."
        ],
        ben: [
            "Thu nhập 7-9 triệu/tháng + Thưởng nóng.",
            "Hỗ trợ tài chính trong suốt quá trình đào tạo.",
            "Đóng BHXH, BHYT, BHTN đầy đủ; Du lịch hàng năm."
        ]
    },
    {
        id: 2,
        title: "Nhân viên CSKH MB Bank",
        bank: "MBBank",
        // Theme Xanh Dương Đậm - Tin cậy
        themeText: "text-blue-700",
        themeBg: "bg-blue-50",
        themeBtn: "bg-blue-700 hover:bg-blue-800",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Full-time",
        salary: "7.000.000đ - 9.000.000đ", 
        location: "Đống Đa, HN", 
        desc: [
            "Tiếp nhận cuộc gọi giải đáp thông tin dịch vụ thẻ MB Bank.",
            "Gọi ra cho khách hàng gọi nhỡ lên tổng đài (khi có yêu cầu).",
            "Không bán hàng, không sale."
        ],
        req: [
            "Tốt nghiệp Trung cấp trở lên (Chấp nhận chờ bằng).",
            "Nhanh nhẹn, hòa đồng, giọng nói chuẩn không ngọng."
        ],
        ben: [
            "Hỗ trợ 1.000.000đ khóa đào tạo (10 ngày).",
            "Làm việc tại Tòa nhà MBBank chuyên nghiệp, trẻ trung.",
            "Hưởng đầy đủ BHXH + BHYT, thưởng lễ tết."
        ]
    },
    {
        id: 3,
        title: "Chuyên viên Tư vấn Thẻ UOB",
        bank: "UOB",
        // Theme Hồng/Đỏ - Năng động (Brand UOB)
        themeText: "text-rose-600",
        themeBg: "bg-rose-50",
        themeBtn: "bg-rose-600 hover:bg-rose-700",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Full-time",
        salary: "15 - 20 Triệu ++", 
        location: "Cầu Giấy, HN", 
        desc: [
            "Thực hiện cuộc gọi tư vấn thẻ ATM, thẻ tín dụng, khoản vay UOB theo Data công ty cấp.",
            "Trao đổi về Quyền lợi, CTKM đặc biệt dành cho khách hàng."
        ],
        req: [
            "18-35 tuổi, Không nợ xấu ngân hàng.",
            "Có kinh nghiệm từ 1 năm telesale/sale là lợi thế.",
            "Cầu thị, ham học hỏi, giao tiếp nhanh nhẹn."
        ],
        ben: [
            "Thu nhập 15-20tr++ (Lương cứng + Hoa hồng không giới hạn).",
            "Lộ trình thăng tiến lên Trưởng nhóm/Giám sát/Quản lý.",
            "Thưởng nóng, thưởng du lịch, giải thưởng từ đối tác."
        ]
    },
    {
        id: 4,
        title: "Nhân viên Tư vấn BIDV",
        bank: "BIDV",
        // Theme Xanh Ngọc - Tươi mới (Brand BIDV)
        themeText: "text-emerald-600",
        themeBg: "bg-emerald-50",
        themeBtn: "bg-emerald-600 hover:bg-emerald-700",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Full-time",
        salary: "7.000.000đ - 8.000.000đ", 
        location: "Long Biên, HN", 
        desc: [
            "Gọi điện cho khách hàng theo Data từ BIDV cung cấp.",
            "Tư vấn giới thiệu CTKM, hướng dẫn mở thẻ, hoàn thiện hồ sơ.",
            "Cập nhật kết quả cuộc gọi lên hệ thống."
        ],
        req: [
            "Giọng nói chuẩn, không ngọng, kỹ năng giao tiếp tốt.",
            "Có trách nhiệm trong công việc."
        ],
        ben: [
            "Nhận 100% lương khi thử việc.",
            "Hỗ trợ chi phí đào tạo 700k/khóa/7 ngày.",
            "Đóng BHXH theo quy định, cơ hội thăng tiến."
        ]
    },
    {
        id: 5,
        title: "CSKH Ngân hàng LPBank",
        bank: "LPBank",
        // Theme Cam - Nhiệt huyết (Brand LPBank)
        themeText: "text-orange-600",
        themeBg: "bg-orange-50",
        themeBtn: "bg-orange-500 hover:bg-orange-600",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Full-time",
        salary: "7.000.000đ - 9.000.000đ", 
        location: "Đống Đa, HN", 
        desc: [
            "Tiếp nhận cuộc gọi, giải đáp thắc mắc khách hàng LPBank nhanh chóng.",
            "Tư vấn dịch vụ thẻ, TK, ngân hàng điện tử.",
            "Không bán hàng, không áp doanh số."
        ],
        req: [
            "Tốt nghiệp trung cấp trở lên, thành thạo tin học văn phòng.",
            "Giọng chuẩn miền Bắc, giao tiếp nhanh nhẹn."
        ],
        ben: [
            "Hỗ trợ 100k/ngày đào tạo (8 ngày).",
            "Thưởng lễ tết, sinh nhật, du lịch, teambuilding hàng năm.",
            "Đóng BHXH sau 2 tháng."
        ]
    },
    {
        id: 6,
        title: "Thực tập sinh Telesales UOB",
        bank: "UOB TTS",
        // Theme Xám Indigo - Chuyên nghiệp cho TTS
        themeText: "text-indigo-600",
        themeBg: "bg-indigo-50",
        themeBtn: "bg-indigo-600 hover:bg-indigo-700",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Thực tập",
        salary: "Phụ cấp + Incentive", 
        location: "Cầu Giấy, HN", 
        desc: [
            "Gọi điện tư vấn theo data công ty cung cấp (100-200 data/ngày).",
            "Giới thiệu sản phẩm UOB theo kịch bản có sẵn."
        ],
        req: [
            "Sinh viên năm cuối hoặc chờ bằng, thực tập tối thiểu 3 tháng.",
            "Định hướng theo ngành Telesales hoặc Ngân hàng."
        ],
        ben: [
            "Phụ cấp 2.000.000 VNĐ/tháng + Incentive (250k - 1.250k).",
            "Hỗ trợ dấu mộc thực tập, đào tạo bài bản.",
            "Cơ hội trở thành Nhân viên chính thức."
        ]
    },
    {
        id: 7,
        title: "Nhân viên CSKH TPBank (Part-time)",
        bank: "TPBank",
        themeText: "text-purple-600",
        themeBg: "bg-purple-50",
        themeBtn: "bg-purple-600 hover:bg-purple-700",
        image: "https://images.unsplash.com/photo-1521791136064-7985c2717883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        type: "Part-time",
        salary: "3.000.000đ - 5.000.000đ", 
        location: "Hà Nội", 
        desc: [
            "Tiếp nhận cuộc gọi đến, tư vấn dịch vụ TPBank chuyên nghiệp.",
            "Không yêu cầu bán hàng – Không áp doanh số."
        ],
        req: [
            "Nam/Nữ 18-35 tuổi (Chấp nhận SV năm 3, 4).",
            "Không yêu cầu kinh nghiệm, giọng dễ nghe."
        ],
        ben: [
            "Hỗ trợ 120.000đ/ngày đào tạo (7 ngày hành chính).",
            "Cơ hội trở thành nhân viên chính thức."
        ]
    }
];

// ==========================================
// 2. LOGIC RENDER JOB (TẠO GIAO DIỆN)
// ==========================================
function renderJobs(data) {
    const container = document.getElementById('jobList');
    const noJob = document.getElementById('noJobFound');
    
    // Xóa nội dung cũ
    container.innerHTML = '';
    
    // Kiểm tra dữ liệu
    if(data.length === 0) {
        noJob.classList.remove('hidden');
        return;
    } else {
        noJob.classList.add('hidden');
    }

    // Loop tạo từng card
    data.forEach((job, index) => {
        const cardHTML = `
            <div class="bg-white rounded-2xl shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden group border border-slate-100 flex flex-col h-full transform hover:-translate-y-2"
                 data-aos="fade-up" data-aos-delay="${index * 100}">
                
                <div class="h-48 overflow-hidden relative cursor-pointer" onclick="openModal(${job.id})">
                    <img src="${job.image}" alt="${job.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out">
                    
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>

                    <div class="absolute bottom-4 left-4 z-10">
                        <span class="bg-white/95 backdrop-blur-md ${job.themeText} px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-widest shadow-lg">
                            ${job.bank}
                        </span>
                    </div>
                </div>

                <div class="p-6 flex flex-col flex-grow relative bg-white">
                    <h3 class="text-xl font-bold text-slate-800 mb-4 group-hover:${job.themeText} transition-colors cursor-pointer leading-snug line-clamp-2" 
                        onclick="openModal(${job.id})">
                        ${job.title}
                    </h3>

                    <div class="space-y-3 mb-8">
                        <div class="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:border-slate-200 transition">
                            <div class="w-8 shrink-0 flex justify-center"><i class="fas fa-money-bill-wave ${job.themeText}"></i></div>
                            <span class="font-bold text-slate-800 ml-1">${job.salary}</span>
                        </div>
                        <div class="flex items-center text-sm text-slate-500 px-2">
                            <div class="w-6 shrink-0 flex justify-center"><i class="fas fa-map-marker-alt text-slate-400"></i></div>
                            <span class="ml-2 truncate">${job.location}</span>
                        </div>
                        <div class="flex items-center text-sm text-slate-500 px-2">
                            <div class="w-6 shrink-0 flex justify-center"><i class="fas fa-clock text-slate-400"></i></div>
                            <span class="ml-2">${job.type}</span>
                        </div>
                    </div>

                    <div class="mt-auto pt-5 border-t border-slate-100">
                        <button onclick="openModal(${job.id})" 
                                class="w-full py-3.5 rounded-xl text-white font-bold shadow-md transform transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group-active:scale-95 ${job.themeBtn}">
                            Xem chi tiết <i class="fas fa-arrow-right text-xs opacity-80 group-hover:translate-x-1 transition-transform"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// ==========================================
// 3. LOGIC LỌC (FILTER)
// ==========================================
function filterJobs() {
    const bankVal = document.getElementById('filterBank').value;
    const typeVal = document.getElementById('filterType').value;

    const filtered = jobs.filter(job => {
        // Kiểm tra ngân hàng (dùng includes vì "UOB" khớp với "UOB TTS")
        const matchBank = bankVal === 'all' || job.bank.includes(bankVal);
        const matchType = typeVal === 'all' || job.type === typeVal;
        return matchBank && matchType;
    });

    renderJobs(filtered);
}

// ==========================================
// 4. LOGIC MODAL (POPUP CHI TIẾT)
// ==========================================
const modal = document.getElementById('jobModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');

function openModal(id) {
    const job = jobs.find(j => j.id === id);
    if (!job) return;

    // A. Fill dữ liệu Text cơ bản
    document.getElementById('modalTitle').innerText = job.title;
    document.getElementById('modalLoc').innerText = job.location;
    
    // B. Xử lý Style động (Màu sắc theo Job)
    
    // 1. Badge Ngân hàng
    const bankLabel = document.getElementById('modalBank');
    bankLabel.innerText = job.bank;
    bankLabel.className = `inline-block px-3 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest mb-4 shadow-sm ${job.themeBg} ${job.themeText}`;

    // 2. Mức lương (Tô màu)
    const salaryText = document.getElementById('modalSalary');
    salaryText.innerText = job.salary;
    salaryText.className = `font-bold text-lg ${job.themeText}`;

    // C. Render các danh sách (Desc, Req, Ben)
    const renderList = (arr, elementId) => {
        const el = document.getElementById(elementId);
        if(el) {
            el.innerHTML = arr.map(item => `<li class="mb-3 leading-relaxed">${item}</li>`).join('');
        }
    };
    
    renderList(job.desc, 'modalDesc');
    renderList(job.req, 'modalReq');
    renderList(job.ben, 'modalBen');

    // D. Hiển thị Modal
    modal.classList.remove('hidden');
    
    // Animation Fade-in
    setTimeout(() => {
        modalOverlay.classList.remove('opacity-0');
        modalContent.classList.remove('opacity-0', 'scale-95');
        modalContent.classList.add('scale-100');
    }, 10);
    
    // Khóa cuộn background
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    // Animation Fade-out
    modalOverlay.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('opacity-0', 'scale-95');

    // Đợi hiệu ứng xong mới ẩn
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; 
    }, 300);
}

// Đóng khi click ra ngoài
modalOverlay.addEventListener('click', closeModal);

// ==========================================
// 5. SUBMIT FORM (LIÊN KẾT GOOGLE SHEETS)
// ==========================================
function submitForm(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const originalContent = btn.innerHTML;
    
    // 1. Lấy dữ liệu form
    const form = e.target;
    const data = new FormData(form);
    
    // *QUAN TRỌNG: DÁN URL CỦA GOOGLE APP SCRIPT VÀO DƯỚI ĐÂY*
    // Nếu chưa có, hãy tạo theo hướng dẫn ở bước trước. Nếu chỉ muốn test, để trống.
    const scriptURL = ''; 

    // 2. Hiệu ứng Loading
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Đang gửi...';
    btn.disabled = true;
    btn.classList.add('opacity-80', 'cursor-not-allowed');

    // 3. Logic gửi
    if (scriptURL) {
        fetch(scriptURL, { method: 'POST', body: data })
            .then(response => {
                alert('🎉 CHÚC MỪNG!\nHồ sơ đã được lưu thành công vào hệ thống.');
                resetForm();
            })
            .catch(error => {
                alert('❌ Lỗi kết nối! Vui lòng thử lại.');
                resetForm();
            });
    } else {
        // Chế độ Demo (khi chưa có URL)
        setTimeout(() => {
            alert('🎉 (DEMO) Gửi thành công!\n(Để lưu thật, hãy dán link Google Script vào biến scriptURL trong file script.js)');
            resetForm();
        }, 1500);
    }

    function resetForm() {
        btn.innerHTML = originalContent;
        btn.disabled = false;
        btn.classList.remove('opacity-80', 'cursor-not-allowed');
        form.reset();
        closeModal();
    }
}

// ==========================================
// 6. KHỞI CHẠY LẦN ĐẦU
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderJobs(jobs);
});