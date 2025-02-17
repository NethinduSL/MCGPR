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





    ['classA', 'classB', 'classC', 'classD', 'classE', 'classF'].forEach(classKey => {
        periodTimings.forEach(period => {
            console.log("badu vada")
            if (currentTime >= period.start && currentTime < period.end) {
                const reliefTeacherId = reliefDataForDay[classKey]?.[period.id];
                const teacherId = reliefTeacherId || teacherDataForDay[classKey]?.[period.id];

                const imgId = `img${classKey.charAt(5).toUpperCase()}`;
                const nameId = `name${classKey.charAt(5).toUpperCase()}`;
                const subjectId = `subject${classKey.charAt(5).toUpperCase()}`;
  document.getElementById("Rak").textContent = period.id;

                if (teacherId && teachers[teacherId]) {
                    const teacher = teachers[teacherId];
                    const img = new Image();
                    img.src = teacher.img;
                    img.onerror = function() {
                        document.getElementById(imgId).src = "https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg";
                    };
                    img.onload = function() {
                        document.getElementById(imgId).src = teacher.img;
                    };
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
                

                    

let int = document.getElementById("int");
int.classList.remove("hide");
int.classList.add("square");



let int2 = document.getElementById("int2");
int2.classList.remove("hide");
int2.classList.add("square");





let int3 = document.getElementById("int3");
int3.classList.remove("hide");
int3.classList.add("square");









let targetTime = new Date();
targetTime.setHours(11, 30, 0, 0);

function updateCountdown() {
    let currentTime = new Date();
    let remainingTime = targetTime - currentTime;

    if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("names").innerHTML = "Time's up!";
    } else {
        let minutes = Math.floor(remainingTime / (1000 * 60));
        let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
        let countdownText = `${minutes} minutes and ${seconds} seconds`;

        let countdownElement = document.getElementById("names");
        countdownElement.innerHTML = countdownText;

        countdownElement.id = "names";
    }
}


let countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();













                } else {
                    document.getElementById(imgId).src = "https://thumbs.dreamstime.com/b/error-message-icon-symbol-logo-design-vector-236124115.jpg";
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
