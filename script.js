
const reliefData = {
    Monday: {
        classA: {
            period1:"SANP",
            period2:"SANP",
            period3:"MVHD",
            period4:"GHDC",
            period5:null,
            period6:"HLDP",
            period7:"SDJP",
            period8:"OPT2A",
            period9:"MACH", // New period
        },
        classB: {
            period1:"STIN",
            period2:"KSRI",
            period3:"DGSR",
            period4:"MKRC",
            period5:null,
            period6:"IUG",
            period7:"KHNL",
            period8:"OPT2A",
            period9:"KSRI", // New period
        },
        classC: {
            period1:"WHG",
            period2:"WHG",
            period3:"IUG",
            period4:"BPLA",
            period5:null,
            period6:"MDMU",
            period7:"MDMU",
            period8:"OPT2A",
            period9:"ASMA", // New period
        },
        classD: {
            period1:"NUWA",
            period2:"SDJP",
            period3:"BDSE",
            period4:"KSRI",
            period5:null,
            period6:"MVHD",
            period7:"MVHD",
            period8:"IAGA",
            period9:"IAGA", // New period
        },
        classE: {
            period1:"WARW",
            period2:"IUG",
            period3:"GISA",
            period4:"WARW",
            period5:null,
            period6:"SWM",
            period7:"SWM",
            period8:"NAPM",
            period9:"NAPM", // New period
        },
        classF: {
            period1:"SMYD",
            period2:"SWM",
            period3:"GHDC",
            period4:"MACH",
            period5:null,
            period6:"UJTC",
            period7:"HLDP",
            period8:"HLDP",
            period9:"SWM", // New period
        },
    },
    Tuesday: {
        classA: {
            period1:"SANP",
            period2:"HLDP",
            period3:"HLDP",
            period4:"GHDC",
            period5:null,
            period6:"OPT3A",
            period7:"MVHD",
            period8:"OPT1A",
            period9:"SDJP", // New period
        },
        classB: {
            period1:"STIN",
            period2:"STIN",
            period3:"KHNL",
            period4:"MKRC",
            period5:null,
            period6:"OPT3A",
            period7:"DGSR",
            period8:"OPT1A",
            period9:"IUG", // New period
        },
        classC: {
            period1:"WHG",
            period2:"IGU",
            period3:"MACH",
            period4:"BPLA",
            period5:null,
            period6:"OPT3A",
            period7:"ASMA",
            period8:"OPT1A",
            period9:"MDMU", // New period
        },
        classD: {
            period1:"OPT1B",
            period2:"OPT1B",
            period3:"SDJP",
            period4:"OPT2B",
            period5:null,
            period6:"NUWA",
            period7:"NUWA",
            period8:"KSRI",
            period9:"BDSE", // New period
        },
        classE: {
            period1:"OPT1B",
            period2:"OPT1B",
            period3:"IUG",
            period4:"OPT2B",
            period5:null,
            period6:"WARW",
            period7:"WARW",
            period8:"NAPM",
            period9:"GISA", // New period
        },
        classF: {
            period1:"OPT1B",
            period2:"OPT1B",
            period3:"SMYD",
            period4:"OPT2B",
            period5:null,
            period6:"HLDP",
            period7:"HLDP",
            period8:"SWM",
            period9:"GHDC", // New period
        },
    },
    Wednesday: {
        classA: {
            period1:"SANP",
            period2:"GHDC",
            period3:"GHDC",
            period4:"HLDP",
            period5:null,
            period6:"SDJP",
            period7:"MVHD",
            period8:"OPT1A",
            period9:"OPT1A", // New period
        },
        classB: {
            period1:"STIN",
            period2:"MKRC",
            period3:"MKRC",
            period4:"KHNL",
            period5:null,
            period6:"DGSR",
            period7:"IUG",
            period8:"OPT1A",
            period9:"OPT1A", // New period
        },
        classC: {
            period1:"WHG",
            period2:"BPLA",
            period3:"BPLA",
            period4:"MDMU",
            period5:null,
            period6:"IUG",
            period7:"ASMA",
            period8:"OPT1A",
            period9:"OPT1A", // New period
        },
        classD: {
            period1:"SDJP",
            period2:"OPT3B",
            period3:"IAGA",
            period4:"IAGA",
            period5:null,
            period6:"NUWA",
            period7:"NUWA",
            period8:"BDSE",
            period9:"BDSE", // New period
        },
        classE: {
            period1:"NAPM",
            period2:"OPT3B",
            period3:"KSRI",
            period4:"SWM",
            period5:null,
            period6:"NPAM",
            period7:"SWM",
            period8:"GISA",
            period9:"GISA", // New period
        },
        classF: {
            period1:"SMYD",
            period2:"OPT3B",
            period3:"UJTC",
            period4:"UJTC",
            period5:null,
            period6:"SWM",
            period7:"HLDP",
            period8:"GHDC",
            period9:"GHDC", // New period
        },
    },
    Thursday: {
        classA: {
            period1:"SANP",
            period2:"HLDP",
            period3:"HLDP",
            period4:"MVHD",
            period5:null,
            period6:"OPT3A",
            period7:"OPT3A",
            period8:"GHDC",
            period9:"SDJP", // New period
        },
        classB: {
            period1:"DGSR",
            period2:"DGSR",
            period3:"STIN",
            period4:"IUG",
            period5:null,
            period6:"OPT3A",
            period7:"OPT3A",
            period8:"MKRC",
            period9:"KHNL", // New period
        },
        classC: {
            period1:"MDMU",
            period2:"WHG",
            period3:"IUG",
            period4:"MACH",
            period5:null,
            period6:"OPT3A",
            period7:"OPT3A",
            period8:"BPLA",
            period9:"WHG", // New period
        },
        classD: {
            period1:"SDJP",
            period2:"NUWA",
            period3:"BDSE",
            period4:"BDSE",
            period5:null,
            period6:"MVHD",
            period7:"MVHD",
            period8:"IAGA",
            period9:"IAGA", // New period
        },
        classE: {
            period1:"IUG",
            period2:"NAMP",
            period3:"GISA",
            period4:"GISA",
            period5:null,
            period6:"NAPM",
            period7:"IUG",
            period8:"KSRI",
            period9:"SWM", // New period
        },
        classF: {
            period1:"HLDP",
            period2:"MACH",
            period3:"GHDC",
            period4:"GHDC",
            period5:null,
            period6:"UJTC",
            period7:"SWM",
            period8:"SWM",
            period9:"SMYD", // New period
        },
    },
    Friday: {
        classA: {
            period1:"HLDP",
            period2:"SANP",
            period3:"OPT2A",
            period4:"OPT2A",
            period5:null,
            period6:"SDJP",
            period7:"GHDC",
            period8:"GHDC",
            period9:"MACH", // New period
        },
        classB: {
            period1:"STIN",
            period2:"IUG",
            period3:"OPT2A",
            period4:"OPT2A",
            period5:null,
            period6:"DGSR",
            period7:"MKRC",
            period8:"MKRC",
            period9:"DGSR", // New period
        },
        classC: {
            period1:"WHG",
            period2:"IUG",
            period3:"MACH",
            period4:"BPLA",
            period5:null,
            period6:"OPT3A",
            period7:"ASMA",
            period8:"OPT1A",
            period9:"MDMU", // New period
        },
        classD: {
            period1:"SDJP",
            period2:"IAJA",
            period3:"OPT3B",
            period4:"OPT3B",
            period5:null,
            period6:"OPT2B",
            period7:"OPT2B",
            period8:"OPT1B",
            period9:"BDSE", // New period
        },
        classE: {
            period1:"IUG",
            period2:"SWM",
            period3:"OPT3B",
            period4:"OPT3B",
            period5:null,
            period6:"OPT2B",
            period7:"OPT2B",
            period8:"OPT1B",
            period9:"GISA", // New period
        },
        classF: {
            period1:"SMYD",
            period2:"HLDP",
            period3:"OPT3B",
            period4:"OPT3B",
            period5:null,
            period6:"OPT2B",
            period7:"OPT2B",
            period8:"OPT1B",
            period9:"GHDC", // New period
        },
    },
};
const teacherDataByDay = {
    Monday: {
        classA: {
            period1:"SANP",
            period2:"SANP",
            period3:"MVHD",
            period4:"GHDC",
            period5:null,
            period6:"HLDP",
            period7:"SDJP",
            period8:"OPT2A",
            period9:"MACH", // New period
        },
        classB: {
            period1:"STIN",
            period2:"KSRI",
            period3:"DGSR",
            period4:"MKRC",
            period5:null,
            period6:"IUG",
            period7:"KHNL",
            period8:"OPT2A",
            period9:"KSRI", // New period
        },
        classC: {
            period1:"WHG",
            period2:"WHG",
            period3:"IUG",
            period4:"BPLA",
            period5:null,
            period6:"MDMU",
            period7:"MDMU",
            period8:"OPT2A",
            period9:"ASMA", // New period
        },
        classD: {
            period1:"NUWA",
            period2:"SDJP",
            period3:"BDSE",
            period4:"KSRI",
            period5:null,
            period6:"MVHD",
            period7:"MVHD",
            period8:"IAGA",
            period9:"IAGA", // New period
        },
        classE: {
            period1:"WARW",
            period2:"IUG",
            period3:"GISA",
            period4:"WARW",
            period5:null,
            period6:"SWM",
            period7:"SWM",
            period8:"NAPM",
            period9:"NAPM", // New period
        },
        classF: {
            period1:"SMYD",
            period2:"SWM",
            period3:"GHDC",
            period4:"MACH",
            period5:null,
            period6:"UJTC",
            period7:"HLDP",
            period8:"HLDP",
            period9:"SWM", // New period
        },
    },
    Tuesday: {
        classA: {
            period1:"SANP",
            period2:"HLDP",
            period3:"HLDP",
            period4:"GHDC",
            period5:null,
            period6:"OPT3A",
            period7:"MVHD",
            period8:"OPT1A",
            period9:"SDJP", // New period
        },
        classB: {
            period1:"STIN",
            period2:"STIN",
            period3:"KHNL",
            period4:"MKRC",
            period5:null,
            period6:"OPT3A",
            period7:"DGSR",
            period8:"OPT1A",
            period9:"IUG", // New period
        },
        classC: {
            period1:"WHG",
            period2:"IGU",
            period3:"MACH",
            period4:"BPLA",
            period5:null,
            period6:"OPT3A",
            period7:"ASMA",
            period8:"OPT1A",
            period9:"MDMU", // New period
        },
        classD: {
            period1:"OPT1B",
            period2:"OPT1B",
            period3:"SDJP",
            period4:"OPT2B",
            period5:null,
            period6:"NUWA",
            period7:"NUWA",
            period8:"KSRI",
            period9:"BDSE", // New period
        },
        classE: {
            period1:"OPT1B",
            period2:"OPT1B",
            period3:"IUG",
            period4:"OPT2B",
            period5:null,
            period6:"WARW",
            period7:"WARW",
            period8:"NAPM",
            period9:"GISA", // New period
        },
        classF: {
            period1:"OPT1B",
            period2:"OPT1B",
            period3:"SMYD",
            period4:"OPT2B",
            period5:null,
            period6:"HLDP",
            period7:"HLDP",
            period8:"SWM",
            period9:"GHDC", // New period
        },
    },
    Wednesday: {
        classA: {
            period1:"SANP",
            period2:"GHDC",
            period3:"GHDC",
            period4:"HLDP",
            period5:null,
            period6:"SDJP",
            period7:"MVHD",
            period8:"OPT1A",
            period9:"OPT1A", // New period
        },
        classB: {
            period1:"STIN",
            period2:"MKRC",
            period3:"MKRC",
            period4:"KHNL",
            period5:null,
            period6:"DGSR",
            period7:"IUG",
            period8:"OPT1A",
            period9:"OPT1A", // New period
        },
        classC: {
            period1:"WHG",
            period2:"BPLA",
            period3:"BPLA",
            period4:"MDMU",
            period5:null,
            period6:"IUG",
            period7:"ASMA",
            period8:"OPT1A",
            period9:"OPT1A", // New period
        },
        classD: {
            period1:"SDJP",
            period2:"OPT3B",
            period3:"IAGA",
            period4:"IAGA",
            period5:null,
            period6:"NUWA",
            period7:"NUWA",
            period8:"BDSE",
            period9:"BDSE", // New period
        },
        classE: {
            period1:"NAPM",
            period2:"OPT3B",
            period3:"KSRI",
            period4:"SWM",
            period5:null,
            period6:"NPAM",
            period7:"SWM",
            period8:"GISA",
            period9:"GISA", // New period
        },
        classF: {
            period1:"SMYD",
            period2:"OPT3B",
            period3:"UJTC",
            period4:"UJTC",
            period5:null,
            period6:"SWM",
            period7:"HLDP",
            period8:"GHDC",
            period9:"GHDC", // New period
        },
    },
    Thursday: {
        classA: {
            period1:"SANP",
            period2:"HLDP",
            period3:"HLDP",
            period4:"MVHD",
            period5:null,
            period6:"OPT3A",
            period7:"OPT3A",
            period8:"GHDC",
            period9:"SDJP", // New period
        },
        classB: {
            period1:"DGSR",
            period2:"DGSR",
            period3:"STIN",
            period4:"IUG",
            period5:null,
            period6:"OPT3A",
            period7:"OPT3A",
            period8:"MKRC",
            period9:"KHNL", // New period
        },
        classC: {
            period1:"MDMU",
            period2:"WHG",
            period3:"IUG",
            period4:"MACH",
            period5:null,
            period6:"OPT3A",
            period7:"OPT3A",
            period8:"BPLA",
            period9:"WHG", // New period
        },
        classD: {
            period1:"SDJP",
            period2:"NUWA",
            period3:"BDSE",
            period4:"BDSE",
            period5:null,
            period6:"MVHD",
            period7:"MVHD",
            period8:"IAGA",
            period9:"IAGA", // New period
        },
        classE: {
            period1:"IUG",
            period2:"NAMP",
            period3:"GISA",
            period4:"GISA",
            period5:null,
            period6:"NAPM",
            period7:"IUG",
            period8:"KSRI",
            period9:"SWM", // New period
        },
        classF: {
            period1:"HLDP",
            period2:"MACH",
            period3:"GHDC",
            period4:"GHDC",
            period5:null,
            period6:"UJTC",
            period7:"SWM",
            period8:"SWM",
            period9:"SMYD", // New period
        },
    },
    Friday: {
        classA: {
            period1:"HLDP",
            period2:"SANP",
            period3:"OPT2A",
            period4:"OPT2A",
            period5:null,
            period6:"SDJP",
            period7:"GHDC",
            period8:"GHDC",
            period9:"MACH", // New period
        },
        classB: {
            period1:"STIN",
            period2:"IUG",
            period3:"OPT2A",
            period4:"OPT2A",
            period5:null,
            period6:"DGSR",
            period7:"MKRC",
            period8:"MKRC",
            period9:"DGSR", // New period
        },
        classC: {
            period1:"WHG",
            period2:"IUG",
            period3:"MACH",
            period4:"BPLA",
            period5:null,
            period6:"OPT3A",
            period7:"ASMA",
            period8:"OPT1A",
            period9:"MDMU", // New period
        },
        classD: {
            period1:"SDJP",
            period2:"IAJA",
            period3:"OPT3B",
            period4:"OPT3B",
            period5:null,
            period6:"OPT2B",
            period7:"OPT2B",
            period8:"OPT1B",
            period9:"BDSE", // New period
        },
        classE: {
            period1:"IUG",
            period2:"SWM",
            period3:"OPT3B",
            period4:"OPT3B",
            period5:null,
            period6:"OPT2B",
            period7:"OPT2B",
            period8:"OPT1B",
            period9:"GISA", // New period
        },
        classF: {
            period1:"SMYD",
            period2:"HLDP",
            period3:"OPT3B",
            period4:"OPT3B",
            period5:null,
            period6:"OPT2B",
            period7:"OPT2B",
            period8:"OPT1B",
            period9:"GHDC", // New period
        },
    },
};


    // Period timings (24-hour format, 5th is interval)
    const periodTimings = [
        { start: "07:50", end: "08:10", id: "period1" }, 
        { start: "08:30", end: "09:10", id: "period2" },
        { start: "09:10", end: "09:50", id: "period3" },
        { start: "09:50", end: "10:30", id: "period4" },
        { start: "10:30", end: "10:50", id: "period5" }, // Interval
        { start: "10:50", end: "11:30", id: "period6" },
        { start: "11:30", end: "12:10", id: "period7" },
        { start: "12:10", end: "12:50", id: "period8" },
        { start: "12.50", end: "13:30", id: "period9" },
        { start: "13.30", end: "23:00", id: "No School" }
      
    ];

    // Teacher details (ID => Name and Subject)
   
 
const teachers = {
  // Sinhala
  STIN: { name: "S. T. Indrani", subjects: "Sinhala, Optional-2", img: "Image/STIN.JPG" },//
  STIN2: { name: "S. T. Indrani", subjects: "Tutorials Sinhala", img: "Image/STIN.JPG" },//
  SANP: { name: "S. A. Nayana Preethi Kumari", subjects: "Sinhala", img: "Image/SANP.JPG" },//
  SWM: { name: "S. W. M. Krishantha", subjects: "Sinhala, Tutorials Sinhala", img: "Image/SWM.JPG" },
  NUWA: { name: "G. H. N. Chathuranga", subjects: "Sinhala", img: "Image/NUWA.JPG" },//
  MDMU: { name: "M.D.M.U. Pushpakumara", subjects: "Sinhala", img: "Image/MDMU.JPG" },

  // English
  IUG: { name: "I. U. Godagama", subjects: "English", img: "Image/IUG.JPG" },
  SDJP: { name: "S. D. R. J. P. Samarakoon", subjects: "English", img: "Image/SDJP.JPG" },
  SMYD: { name: "S. M. Y. Darshana", subjects: "English", img: "Image/SMYD.JPG" },

  // Mathematics
  MKRC: { name: "M. K. Rasika Nishantha", subjects: "Mathematics", img: "Image/MKRC.JPG" },
  HKAU: { name: "H. K. A. Udayangi", subjects: "Mathematics", img: "Image/HKAU.JPG" },
  GHDC: { name: "T. H. D. Chathulakkana", subjects: "Mathematics", img: "Image/GHDC.JPG" },
  BPLA: { name: "B. P. Lamahewa", subjects: "Mathematics", img: "Image/BPLA.png" },
  BDSE: { name: "B. D. Senanayeka", subjects: "Mathematics", img: "Image/BDSE.JPG" },
  GISA: { name: "G. Iresha Sanjeewani", subjects: "Mathematics", img: "Image/GISA.JPG" },

  // Buddhism
  KSRI: { name: "K. Sirisumana", subjects: "Buddhism, Buddhism Tutorial Sciences", img: "Image/KSRI.JPG" },
  MACH: { name: "Makumbura Chandraloka", subjects: "Buddhism", img: "Image/MACH.JPG" },
  DGSR: { name: "D. G. S. R. Dodangoda", subjects: "Buddhism, Science Practical", img: "Image/DGSR.JPG" },

  // Science
  SCI: { name: "D. G. S. R. Dodangoda", subjects: "Science", img: "Image/SCI.JPG" },
  NPAM: { name: "N. P. Amila Chaturika", subjects: "Science", img: "Image/NPAM.JPG" },
  WHG: { name: "W. H. G. Nishani", subjects: "Science", img: "Image/WHG.JPG" },
  HLDP: { name: "H. L. D. P. Champika", subjects: "Science, Tutorial Sciences", img: "Image/HLDP.JPG" },

  // History
  KHNL: { name: "K. H. Nallaperuma", subjects: "History, Tutriols History", img: "Image/KHNL.JPG" },
  MVHD: { name: "M. V. H. D. Gunasekara", subjects: "History", img: "Image/MVHD.JPG" },
  WARW: { name: "W. A. R. Wickramarachchi", subjects: "History, Tutriols History", img: "Image/WARW.JPG" },
  ASMA: { name: "A.S. Manoja", subjects: "History, Tutriols History", img: "Image/ASMA.JPG" },

  // Optional Subjects
  RDNR: { name: "R. D. N. Rathnayaka", subjects: "Optional 1", img: "Image/RDNR.JPG" },
  MWA: { name: "M. W. Ajith", subjects: "Optional-3", img: "Image/MWA.JPG" },
  WTKK: { name: "W. T. K. Koshali", subjects: "Optional-3", img: "Image/WTKK.JPG" },
  AMRA: { name: "A. M. Ranasingha Adikari", subjects: "Optional-2", img: "Image/AMRA.JPG" },
  NTWE: { name: "Nilmini Wewalwala", subjects: "Optional-2", img: "Image/NTWE.JPG" },
  PDKW: { name: "P. D. Kariyawasam", subjects: "Optional-2", img: "Image/PDKW.JPG" },
  MMGG: { name: "M. M. Gothami Gunapali", subjects: "Optional-2", img: "Image/MMGG.JPG" },
  ABCP: { name: "B. A. C. Priyakalum", subjects: "Optional-2", img: "Image/ABCP.JPG" },

  // Practical and Tutorials
  SCPR: { name: "D. G. S. R. Dodangoda", subjects: "Science Practical", img: "Image/SCPR.JPG" },
  LAB1: { name: "Lab1", subjects: "Science Practical", img: "Image/LAB1.JPG" },
  TUTS: { name: "H. L. D. P. Champika", subjects: "Tutorial Sciences", img: "Image/TUTS.JPG" },
  TUTH: { name: "M. V. H. D. Gunasekara", subjects: "Tutriols History", img: "Image/TUTH.JPG" },
  TUSI: { name: "S. T. Indrani", subjects: "Tutorials Sinhala", img: "Image/TUSI.JPG" }
};


async function updateClassData() {
    const now = new Date();
    const sriLankaTime = now.toLocaleString("en-US", { timeZone: "Asia/Colombo" });
    const sriLankaDate = new Date(sriLankaTime);

    const currentDay = sriLankaDate.toLocaleDateString("en-US", { weekday: "long" });
    const currentTime = sriLankaDate.getHours() + ":" + sriLankaDate.getMinutes().toString().padStart(2, "0");
    document.getElementById("Neth").textContent = currentTime;
    document.getElementById("This").textContent = currentDay;
    const teacherDataForDay = teacherDataByDay[currentDay] || {};
    const reliefDataForDay = reliefData[currentDay] || {};


console.log("hi")


    ['classA', 'classB', 'classC', 'classD', 'classE', 'classF'].forEach(classKey => {
        periodTimings.forEach(period => {
            if (currentTime >= period.start && currentTime < period.end) {
                const reliefTeacherId = reliefDataForDay[classKey]?.[period.id];
                const teacherId = reliefTeacherId || teacherDataForDay[classKey]?.[period.id];

                const imgId = `img${classKey.charAt(5).toUpperCase()}`;
                const nameId = `name${classKey.charAt(5).toUpperCase()}`;
                const subjectId = `subject${classKey.charAt(5).toUpperCase()}`;
  document.getElementById("Rak").textContent = period.id;

                if (teacherId && teachers[teacherId]) {
                    const teacher = teachers[teacherId];
                    document.getElementById(imgId).src = teacher.img;
                    document.getElementById(nameId).textContent = teacher.name;
                    document.getElementById(subjectId).textContent = teacher.subjects;
                } else if (reliefTeacherId) {
                    document.getElementById(imgId).src = "https://placehold.co/600x400?text=Relief";
                    document.getElementById(nameId).textContent = "Relief Teacher";
                    document.getElementById(subjectId).textContent = "Relief";
                } else if (period.id === "period5") {
                    document.getElementById(imgId).src = "https://placehold.co/600x400?text=Interval";
                    document.getElementById(nameId).textContent = "Interval";
                    document.getElementById(subjectId).textContent = "";

                   
                    let puka = document.getElementById("classA");
                    let puka2 = document.getElementById("classB");
                    let puka3 = document.getElementById("classC");
                
                    // Add the 'hide' class to the elements
                    puka.classList.add("hide");
                    puka2.classList.add("hide");
                    puka3.classList.add("hide");
                   
                    let mal = document.getElementById("classD");
                    let mal2 = document.getElementById("classE");
                    let mal3 = document.getElementById("classF");
                
                    // Add the 'hide' class to the elements
                    mal.classList.add("hide");
                    mal2.classList.add("hide");
                    mal3.classList.add("hide");
                


                } else {
                    document.getElementById(imgId).src = "https://placehold.co/600x400?text=Hello+World";
                    document.getElementById(nameId).textContent = `Class ${classKey.charAt(5).toUpperCase()}`;
                    document.getElementById(subjectId).textContent = "Subject";
                }

                // Handling optional subjects (OPT1A, OPT1B, OPT2A, etc.)
                const optionDetails = {
                    "OPT1A": {
                        hideClasses: ["classA", "classB", "classC"],
                        showClasses: ["opta", "optb", "optc"],
                        details: [
                            '<br>K.L.U.Kumari<br>R.D.N.Rathnayaka<br>',
                            'OPT 1<br>R.D.N.Rathnayaka-<br>Rev. M.Nandasiri<br>',
                            '<br>U.J.T. Chamari<br>M.V.H.D.gunasekara<br>'
                        ]
                    },
                    "OPT1B": {
                        hideClasses: ["classD", "classE", "classF"],
                        showClasses: ["opta2", "optb2", "optc2"],
                        details: [
                            '<br>A.S.Manoja<br>R.D.N.Rathnayaka<br>',
                            'OPT 1<br>M.W.K.Liyange<br>P.G.P.W. Sewwandi<br>',
                            '<br>K.L.U. Kumari<br>Rev. M.Nandasiri<br>U.G.R.Dilrukshi'
                        ]
                    },
                    "OPT2A": {
                        hideClasses: ["classA", "classB", "classC"],
                        showClasses: ["opta", "optb", "optc"],
                        details: [
                            '<br>M.M. Gothami Gunapali<br>S.T. Indrani<br>',
                            'OPT 2<br>P.D. Kariyawasam<br>Nilmini Wewalwala<br>',
                            '<br>B.A.C. Priyakalum<br>A.M. Ranasingha Adikari<br>Sandamali Ilesinghe'
                        ]
                    },
                    "OPT2B": {
                        hideClasses: ["classD", "classE", "classF"],
                        showClasses: ["opta2", "optb2", "optc2"],
                        details: [
                            '<br>G.W. Chamara Rosan<br>M.M. Gothami Gunapali<br>',
                            'OPT 2<br>H.G. Mangalika<br>S.A. Nayana Preethi Kumari<br>',
                            '<br>B.A.C. Priyakalum<br>A.M. Ranasingha Adikari<br>Nilmini Wewalwala'
                        ]
                    },
                    "OPT3A": {
                        hideClasses: ["classA", "classB", "classC"],
                        showClasses: ["opta", "optb", "optc"],
                        details: [
                            '<br>M.W. Ajith<br>E.M.D.Dayarathna',
                            'OPT 3',
                            '<br>M.Gunawardana<br>W.T.K. Kosali<br>'
                        ]
                    },
                    "OPT3B": {
                        hideClasses: ["classD", "classE", "classF"],
                        showClasses: ["opta2", "optb2", "optc2"],
                        details: [
                            '<br>L.L.L.Sadamali Thilakarathane<br>W.H.G. Nishani<br>M.W. Ajith',
                            'OPT 3<br>M.W.Chamila<br>Y. Nishantha Kumara',
                            '<br>N.L.P.N. Narasinghe<br>J.D.Samantha<br>W.T.K.Kosali'
                        ]
                    }
                };

                // Check if the teacherId matches an optional subject and apply the necessary class changes
                if (optionDetails[teacherId]) {
                  
                const reliefTeacherId2 = reliefDataForDay[classKey]?.[period.id];
                const teacherId2 = reliefTeacherId2 || teacherDataForDay[classKey]?.[period.id];

                if (teacherId2 === "OPT1A") {
                    console.log("Yes huththpooo");
                
                    let puka = document.getElementById("classA");
                    let puka2 = document.getElementById("classB");
                    let puka3 = document.getElementById("classC");
                
                    // Add the 'hide' class to the elements
                    puka.classList.add("hide");
                    puka2.classList.add("hide");
                    puka3.classList.add("hide");
                
                    let paka = document.getElementById("opta");
                    let paka2 = document.getElementById("optb");
                    let paka3 = document.getElementById("optc");
                
                    paka.classList.remove("hide");
                    paka2.classList.remove("hide");
                    paka3.classList.remove("hide");
                    
                
                    paka.classList.add("opt");
                    paka2.classList.add("opt");
                    paka3.classList.add("opt");
                
                    let pka = document.getElementById("opt1");
                    let pka2 = document.getElementById("opt2");
                    let pka3 = document.getElementById("opt3");
                
                    pka.innerHTML = '<br>K.L.U.Kumari<br>R.D.N.Rathnayaka<br>';
                    pka2.innerHTML = 'OPT 1<br>R.D.N.Rathnayaka-<br>Rev. M.Nandasiri<br>';
                    pka3.innerHTML = '<br>U.J.T. Chamari<br>M.V.H.D.gunasekara<br>';
                }
                
                if (teacherId2 === "OPT1B") {
                    console.log("Yes huththpooo");
                
                    let puka = document.getElementById("classD");
                    let puka2 = document.getElementById("classE");
                    let puka3 = document.getElementById("classF");
                
                    // Add the 'hide' class to the elements
                    puka.classList.add("hide");
                    puka2.classList.add("hide");
                    puka3.classList.add("hide");
                
                    let paka = document.getElementById("opta2");
                    let paka2 = document.getElementById("optb2");
                    let paka3 = document.getElementById("optc2");
                
                    paka.classList.remove("hide");
                    paka2.classList.remove("hide");
                    paka3.classList.remove("hide");
                    
                
                    paka.classList.add("opt");
                    paka2.classList.add("opt");
                    paka3.classList.add("opt");
                
                    let pka = document.getElementById("opt12");
                    let pka2 = document.getElementById("opt22");
                    let pka3 = document.getElementById("opt32");
                
                    pka.innerHTML = '<br>A.S.Manoja<br>R.D.N.Rathnayaka<br>';
                    pka2.innerHTML = 'OPT 1<br>M.W.K.Liyange<br>P.G.P.W. Sewwandi<br>';
                    pka3.innerHTML = '<br>K.L.U. Kumari<br>Rev. M.Nandasiri<br>U.G.R.Dilrukshi';
                }
                
                if (teacherId2 === "OPT2A") {
                    console.log("Yes huththpooo");
                
                    let puka = document.getElementById("classA");
                    let puka2 = document.getElementById("classB");
                    let puka3 = document.getElementById("classC");
                
                    // Add the 'hide' class to the elements
                    puka.classList.add("hide");
                    puka2.classList.add("hide");
                    puka3.classList.add("hide");
                
                    let paka = document.getElementById("opta");
                    let paka2 = document.getElementById("optb");
                    let paka3 = document.getElementById("optc");
                
                    paka.classList.remove("hide");
                    paka2.classList.remove("hide");
                    paka3.classList.remove("hide");
                    
                
                    paka.classList.add("opt");
                    paka2.classList.add("opt");
                    paka3.classList.add("opt");
                
                    let pka = document.getElementById("opt1");
                    let pka2 = document.getElementById("opt2");
                    let pka3 = document.getElementById("opt3");
                
                    pka.innerHTML = '<br>M.M. Gothami Gunapali<br>S.T. Indrani<br>';
                    pka2.innerHTML = 'OPT 2<br>P.D. Kariyawasam<br>Nilmini Wewalwala<br>';
                    pka3.innerHTML = '<br>B.A.C. Priyakalum<br>A.M. Ranasingha Adikari<br>Sandamali Ilesinghe';
                }
                
                
                if (teacherId2 === "OPT2B") {
                    console.log("Yes huththpooo");
                
                    let puka = document.getElementById("classD");
                    let puka2 = document.getElementById("classE");
                    let puka3 = document.getElementById("classF");
                
                    // Add the 'hide' class to the elements
                    puka.classList.add("hide");
                    puka2.classList.add("hide");
                    puka3.classList.add("hide");
                
                    let paka = document.getElementById("opta2");
                    let paka2 = document.getElementById("optb2");
                    let paka3 = document.getElementById("optc2");
                
                    paka.classList.remove("hide");
                    paka2.classList.remove("hide");
                    paka3.classList.remove("hide");
                    
                
                    paka.classList.add("opt");
                    paka2.classList.add("opt");
                    paka3.classList.add("opt");
                
                    let pka = document.getElementById("opt12");
                    let pka2 = document.getElementById("opt22");
                    let pka3 = document.getElementById("opt32");
                
                    pka.innerHTML = '<br>G.W. Chamara Rosan<br>M.M. Gothami Gunapali<br>';
                    pka2.innerHTML = 'OPT 2<br>H.G. Mangalika<br>S.A. Nayana Preethi Kumari<br>';
                    pka3.innerHTML = '<br>B.A.C. Priyakalum<br>A.M. Ranasingha Adikari<br>Nilmini Wewalwala';
                }
                
                
                
                
                if (teacherId2 === "OPT3A") {
                    console.log("Yes huththpooo");
                
                    let puka = document.getElementById("classA");
                    let puka2 = document.getElementById("classB");
                    let puka3 = document.getElementById("classC");
                
                    // Add the 'hide' class to the elements
                    puka.classList.add("hide");
                    puka2.classList.add("hide");
                    puka3.classList.add("hide");
                
                    let paka = document.getElementById("opta");
                    let paka2 = document.getElementById("optb");
                    let paka3 = document.getElementById("optc");
                
                    paka.classList.remove("hide");
                    paka2.classList.remove("hide");
                    paka3.classList.remove("hide");
                    
                
                    paka.classList.add("opt");
                    paka2.classList.add("opt");
                    paka3.classList.add("opt");
                
                    let pka = document.getElementById("opt1");
                    let pka2 = document.getElementById("opt2");
                    let pka3 = document.getElementById("opt3");
                
                    pka.innerHTML = '<br>M.W. Ajith<br>E.M.D.Dayarathna';
                    pka2.innerHTML = 'OPT 3';
                    pka3.innerHTML = '<br>M.Gunawardana<br>W.T.K. Kosali<br>';
                }
                
                if (teacherId2 === "OPT3B") {
                    console.log("Yes huththpooo");
                
                    let puka = document.getElementById("classD");
                    let puka2 = document.getElementById("classE");
                    let puka3 = document.getElementById("classF");
                
                    // Add the 'hide' class to the elements
                    puka.classList.add("hide");
                    puka2.classList.add("hide");
                    puka3.classList.add("hide");
                
                    let paka = document.getElementById("opta2");
                    let paka2 = document.getElementById("optb2");
                    let paka3 = document.getElementById("optc2");
                
                    paka.classList.remove("hide");
                    paka2.classList.remove("hide");
                    paka3.classList.remove("hide");
                    
                
                    paka.classList.add("opt");
                    paka2.classList.add("opt");
                    paka3.classList.add("opt");
                
                    let pka = document.getElementById("opt12");
                    let pka2 = document.getElementById("opt22");
                    let pka3 = document.getElementById("opt32");
                
                    pka.innerHTML = '<br>L.L.L.Sadamali Thilakarathane<br>W.H.G. Nishani<br>M.W. Ajith';
                    pka2.innerHTML = 'OPT 3<br>M.W.Chamila<br>Y. Nishantha Kumara';
                    pka3.innerHTML = '<br>N.L.P.N. Narasinghe<br>J.D.Samantha<br>W.T.K.Kosali';
                }
                
                }
            }
        });
    });
}

// Update data every minute
updateClassData();
setInterval(updateClassData, 60000);


