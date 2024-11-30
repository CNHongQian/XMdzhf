document.addEventListener('DOMContentLoaded', function() {
    const translations = {
        'zh-CN': {
            title: '小莫·自动回复',
            features: '特性',
            download: '下载(仅支持windows10及以上系统)',
            support: '支持',
            contact: '联系我们',
            make_communication_smarter: '让沟通更智能',
            based_on_python: '基于Python的PC端微信自动回复工具。',
            download_now: '立即下载',
            product_features: '产品特性',
            image_recognition: '图像识别',
            smart_recognition: '智能识别消息内容。',
            multiple_modes: '多种模式',
            different_reply_options: '提供不同的自动回复选项。',
            remote_control: '远程控制',
            manage_settings_remotely: '通过网络远程管理设置。',
            graphical_interface: '图形界面',
            easy_to_use_ui: '易于使用的操作界面。',
            current_version: '当前版本：v2.3.1',
            click_to_download: '点击下载',
            user_support: '群聊',
            join_our_community: '加入我们的QQ群(748917332)，获取下载链接。',
            visit_bilibili: '访问B站主页',
            any_questions: '有任何问题？请通过以下方式联系我们：',
            email: '邮箱: WWxiaomo@163.com',
            bilibili: 'Bilibili: 虹芡',
            logo_text: '小莫·自动回复'
        },
        'zh-TW': {
            title: '小莫·自動回覆',
            features: '特性',
            download: '下載(僅支援windows10及以上系統)',
            support: '支援',
            contact: '聯繫我們',
            make_communication_smarter: '讓溝通更智慧',
            based_on_python: '基於Python的PC端微信自動回覆工具。',
            download_now: '立即下載',
            product_features: '產品特性',
            image_recognition: '圖像識別',
            smart_recognition: '智能識別消息內容。',
            multiple_modes: '多種模式',
            different_reply_options: '提供不同的自動回覆選項。',
            remote_control: '遠程控制',
            manage_settings_remotely: '通過網絡遠程管理設置。',
            graphical_interface: '圖形界面',
            easy_to_use_ui: '易於使用的操作界面。',
            current_version: '當前版本：v2.3.1',
            click_to_download: '點擊下載',
            user_support: '群聊',
            join_our_community: '加入我們的QQ群（748917332），獲取下載連結。',
            visit_bilibili: '訪問B站主頁',
            any_questions: '有任何問題？請通過以下方式聯繫我們：',
            email: '電子郵件: WWxiaomo@163.com',
            bilibili: 'Bilibili: 虹芡',
            logo_text: '小莫·自動回覆'
        },
        'en': {
            title: 'Xiaomo Auto Reply',
            features: 'Features',
            download: 'Download(Only Windows 10 and above are supported)',
            support: 'Support',
            contact: 'Contact Us',
            make_communication_smarter: 'Make Communication Smarter',
            based_on_python: 'A Python-based PC WeChat auto-reply tool.',
            download_now: 'Download Now',
            product_features: 'Product Features',
            image_recognition: 'Image Recognition',
            smart_recognition: 'Smart recognition of message content.',
            multiple_modes: 'Multiple Modes',
            different_reply_options: 'Offers different auto-reply options.',
            remote_control: 'Remote Control',
            manage_settings_remotely: 'Manage settings remotely over the network.',
            graphical_interface: 'Graphical Interface',
            easy_to_use_ui: 'Easy-to-use interface.',
            current_version: 'Current Version: v2.3.1',
            click_to_download: 'Click to Download',
            user_support: 'Group chats',
            join_our_community: 'Join our QQ group (748917332) to get the download link.',
            visit_bilibili: 'Visit Bilibili Homepage',
            any_questions: 'Have any questions? Please contact us through the following:',
            email: 'Email: WWxiaomo@163.com',
            bilibili: 'Bilibili: 虹芡',
            logo_text: 'XMzdhf'
        }
    };

    const languageSelect = document.getElementById('language-select');
    const currentLang = navigator.language || navigator.userLanguage;

    // 设置默认语言
    let selectedLang = 'zh-CN';
    if (currentLang.startsWith('zh')) {
        selectedLang = 'zh-CN';
    } else if (currentLang.startsWith('en')) {
        selectedLang = 'en';
    }

    // 更新页面上的文本
    function updateTexts(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    // 初始加载时更新文本
    updateTexts(selectedLang);

    // 当用户改变语言选项时更新文本
    languageSelect.addEventListener('change', function() {
        const newLang = this.value;
        updateTexts(newLang);
    });

    // 为导航链接添加平滑滚动效果
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 点击下载按钮时显示提示信息
    document.querySelector('#download .btn').addEventListener('click', function(e) {
        e.preventDefault(); // 阻止默认行为
        alert('请加QQ群：748917332，获取下载链接...');
    });
});