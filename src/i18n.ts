import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "uz", // if nothing is found, fall back to uz
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    resources: {
      ru: {
        translation: {
          home: "Главная",
          about: "О нас",
          courses: "Курсы",
          contact: "Контакты",
          call: "Позвонить",
          intro: {
            subtitle: "Твой проводник в мир технологий и искусства",
            freeLesson: "получите бесплатное первое занятие",
            goToCourses: "ПЕРЕЙТИ К КУРСАМ",
            students: "Довольных студентов",
            teachers: "Преподавателей",
            groups: "групп",
          },
          description_part_1:
            "это современный учебный центр, специализирующийся на технологиях, искусстве и образовании. Мы предоставляем комфортную и поддерживающую среду для развития талантов и навыков наших учеников.",
          description_part_2:
            "это сообщество увлеченных и целеустремленных людей, предлагающее не только учебные курсы, но и мероприятия, мастер-классы и конкурсы. Удобное расположение учебного центра обеспечивает легкий доступ для всех желающих.",
          author_courses_title: "Авторские курсы от JustRobotics",
          robotics: "Робототехника",
          painting_kids: "Живопись для детей",
          painting_adults: "Живопись для взрослых",
          english_kids: "Английский язык для детей",
          chess: "Шахмат",
          form: {
            namePlaceholder: "Ваше имя",
            phonePlaceholder: "Номер телефона",
            selectCourse: "Выберете курс",
            course1: "Работотехника",
            course2: "Живопись для взрослых",
            course3: "Живопись для детей",
            course4: "Шахмат",
            course5: "Английский",
            agePlaceholder: "Возраст",
            getFreeLesson: "получите бесплатное первое занятие",
          },
          branches: {
            branch1: "Филиал Ц4",
            branch2: "Филиал Беруни",
          },
          infoCards: {
            address: "Адрес Орьентир",
            schedule: "График работы",
            phone: "Номера телефонов",
          },
          geoLocating: "Определение местоположения...",
          findMe: "Найти меня",
          yourLocation: "Ваше местоположение",
          footer: {
            logo: "ЛОГО",
            slogan:
              "SLOGAN: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            coursesTitle: "Курсы",
            contactsTitle: "Контакты",
            telegram: "Телеграм",
            instagram: "Инстаграм",
            youtube: "Ютюб",
            courses: [
              "Курсы",
              "Робототехника",
              "Английский для взрослых",
              "Английский для детей",
              "Шахматы",
              "Живопись",
            ],
            contactLinks: ["Контакты", "Телеграм", "Инстаграм", "Ютюб"],
            copyright: "© {{year}} JustRobotics. Все права защищены.",
          },
        },
      },
      uz: {
        translation: {
          home: "Bosh sahifa",
          about: "Biz haqimizda",
          courses: "Kurslar",
          contact: "Kontaktlar",
          call: "Qo‘ng‘iroq qilish",
          intro: {
            subtitle: "Texnologiyalar va san'at dunyosiga yo'lboshchingiz",
            freeLesson: "Birinchi darsni bepul oling",
            goToCourses: "KURSLARGA O'TISH",
            students: "Mamnun talabalar",
            teachers: "O'qituvchilar",
            groups: "Guruhlar",
          },
          description_part_1:
            "Bu zamonaviy o‘quv markazi, texnologiyalar, san'at va ta'lim sohalarida ixtisoslashgan. Biz talabalarning iste’dod va ko‘nikmalarini rivojlantirish uchun qulay va qo‘llab-quvvatlovchi muhit taqdim etamiz.",
          description_part_2:
            "Bu faqat o‘quv kurslarini emas, balki tadbirlar, master-klasslar va musobaqalarni taklif qiladigan, maqsadga intilgan odamlar jamiyati. O‘quv markazining qulay joylashuvi hamma uchun oson kirish imkoniyatini ta'minlaydi.",
          author_courses_title: "JustRobotics tomonidan mualliflik kurslari",
          robotics: "Robototexnika",
          painting_kids: "Bolalar uchun rasm chizish",
          painting_adults: "Kattalar uchun rasm chizish",
          english_kids: "Bolalar uchun ingliz tili",
          chess: "Shaxmat",
          form: {
            namePlaceholder: "Ismingiz",
            phonePlaceholder: "Telefon raqamingiz",
            selectCourse: "Kursni tanlang",
            course1: "Robototexnika",
            course2: "Kattalar uchun rassomchilik",
            course3: "Bolalar uchun rassomchilik",
            course4: "Shaxmat",
            course5: "Ingliz tili",
            agePlaceholder: "Yosh",
            getFreeLesson: "Birinchi darsni bepul oling",
          },
          branches: {
            branch1: "Filial C4",
            branch2: "Filial Beruni",
          },
          infoCards: {
            address: "Manzil yo‘riqnomasi",
            schedule: "Ish vaqti",
            phone: "Telefon raqamlari",
          },
          geoLocating: "Mavjud joyni aniqlash...",
          findMe: "Meni toping",
          yourLocation: "Sizning manzilingiz",
          footer: {
            logo: "LOGO",
            slogan:
              "SLOGAN: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            coursesTitle: "Kurslar",
            contactsTitle: "Kontaktlar",
            telegram: "Telegram",
            instagram: "Instagram",
            youtube: "YouTube",
            courses: [
              "Kurslar",
              "Robototexnika",
              "Kattalar uchun ingliz tili",
              "Bolalar uchun ingliz tili",
              "Shaxmat",
              "Rasm chizish",
            ],
            contactLinks: ["Kontaktlar", "Telegram", "Instagram", "YouTube"],
            copyright: "© {{year}} JustRobotics. Barcha huquqlar himoyalangan.",
          },
        },
      },
     en: {
  translation: {
    home: "Home",
    about: "About Us",
    courses: "Courses",
    contact: "Contacts",
    call: "Call Now",
    intro: {
      subtitle: "Your guide to the world of technology and art",
      freeLesson: "Get your first lesson for free",
      goToCourses: "GO TO COURSES",
      students: "Happy Students",
      teachers: "Teachers",
      groups: "Groups",
    },
    description_part_1:
      "This is a modern educational center specializing in technology, art, and education. We provide a comfortable and supportive environment for students to develop their talents and skills.",
    description_part_2:
      "It's not just about courses — it's a community of goal-oriented people offering events, masterclasses, and competitions. The center's convenient location ensures easy access for everyone.",
    author_courses_title: "Author's Courses by JustRobotics",
    robotics: "Robotics",
    painting_kids: "Drawing for Children",
    painting_adults: "Drawing for Adults",
    english_kids: "English for Kids",
    chess: "Chess",
    form: {
      namePlaceholder: "Your Name",
      phonePlaceholder: "Your Phone Number",
      selectCourse: "Select a Course",
      course1: "Robotics",
      course2: "Drawing for Adults",
      course3: "Drawing for Children",
      course4: "Chess",
      course5: "English",
      agePlaceholder: "Age",
      getFreeLesson: "Get Free Lesson",
    },
    branches: {
      branch1: "C4 Branch",
      branch2: "Beruni Branch",
    },
    infoCards: {
      address: "Address",
      schedule: "Working Hours",
      phone: "Phone Numbers",
    },
    geoLocating: "Detecting current location...",
    findMe: "Find Me",
    yourLocation: "Your Location",
    footer: {
      logo: "LOGO",
      slogan:
        "SLOGAN: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      coursesTitle: "Courses",
      contactsTitle: "Contacts",
      telegram: "Telegram",
      instagram: "Instagram",
      youtube: "YouTube",
      courses: [
        "Courses",
        "Robotics",
        "English for Adults",
        "English for Children",
        "Chess",
        "Drawing",
      ],
      contactLinks: ["Contacts", "Telegram", "Instagram", "YouTube"],
      copyright:
        "© {{year}} JustRobotics. All rights reserved.",
    },
  },
}

    },
  });

export default i18n;
