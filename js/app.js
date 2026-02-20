/* ────────────────────────────────────────────
       PALETA DE COLORES POR TEMA
    ──────────────────────────────────────────── */
    const COLORS = {
        indigo: { bar:'#6366f1', bg:'#eef2ff', text:'#4f46e5', border:'#c7d2fe' },
        violet: { bar:'#8b5cf6', bg:'#f5f3ff', text:'#7c3aed', border:'#ddd6fe' },
        sky:    { bar:'#0ea5e9', bg:'#f0f9ff', text:'#0284c7', border:'#bae6fd' },
        amber:  { bar:'#f59e0b', bg:'#fffbeb', text:'#d97706', border:'#fde68a' },
        emerald:{ bar:'#10b981', bg:'#f0fdf4', text:'#059669', border:'#a7f3d0' },
        rose:   { bar:'#f43f5e', bg:'#fff1f2', text:'#e11d48', border:'#fecdd3' },
        slate:  { bar:'#64748b', bg:'#f8fafc', text:'#475569', border:'#e2e8f0' }
    };

    /* ────────────────────────────────────────────
       DATOS
    ──────────────────────────────────────────── */
    const DATA = {
        courses: [
            {
                id: 1, name: 'Bases de Datos 1', code: 'BD',
                instructor: 'Ing. Leonel Ivan Hercules',
                progress: 78, color: 'indigo',
                resources: [
                    { name: 'Introducción a SQL - Fundamentos', type: 'PDF' },
                    { name: 'Modelo Entidad-Relación', type: 'PDF' },
                    { name: 'Normalización de Bases de Datos', type: 'DOC' },
                    { name: 'Guía de MySQL Workbench', type: 'PDF' }
                ],
                weeks: [
                    { name: 'Semana 1: Introducción a BD y SGBD' },
                    { name: 'Semana 2: Modelo Relacional' },
                    { name: 'Semana 3: Diagrama Entidad-Relación' },
                    { name: 'Semana 4: SQL — DDL y DML' },
                    { name: 'Semana 5: Consultas SELECT avanzadas' },
                    { name: 'Semana 6: Normalización 1FN, 2FN, 3FN' }
                ],
                activities: [
                    { id:'bd1', name:'Diagrama E-R Proyecto',       desc:'Diseñar el diagrama entidad-relación de un sistema de ventas con mínimo 6 entidades.',               due:'28 Feb', grade:'18/20', status:'done' },
                    { id:'bd2', name:'Taller SQL Básico',            desc:'Resolver 15 consultas SQL sobre la base de datos de librería proporcionada.',                       due:'05 Mar', grade:'17/20', status:'done' },
                    { id:'bd3', name:'Normalización Caso Práctico',  desc:'Aplicar las tres primeras formas normales a la tabla sin normalizar entregada en clase.',           due:'12 Mar', grade:'--',    status:'pending' },
                    { id:'bd4', name:'Proyecto Final BD',            desc:'Implementar una base de datos completa en MySQL para el sistema asignado por el docente.',          due:'20 Mar', grade:'--',    status:'pending' }
                ]
            },
            {
                id: 2, name: 'Experiencia de Usuario', code: 'UX',
                instructor: 'Ing. Leonel Ivan Hercules',
                progress: 65, color: 'violet',
                resources: [
                    { name: 'Principios de UX — Nielsen Norman', type: 'PDF' },
                    { name: 'Guía de Wireframing con Figma',     type: 'PDF' },
                    { name: 'Manual de Heurísticas de Usabilidad', type: 'DOC' },
                    { name: 'Casos de Estudio UX/UI',            type: 'PDF' }
                ],
                weeks: [
                    { name: 'Semana 1: ¿Qué es UX? Conceptos base' },
                    { name: 'Semana 2: Investigación de usuarios' },
                    { name: 'Semana 3: Arquitectura de Información' },
                    { name: 'Semana 4: Wireframes y Prototipos' },
                    { name: 'Semana 5: Pruebas de Usabilidad' },
                    { name: 'Semana 6: Diseño Visual y UI' }
                ],
                activities: [
                    { id:'ux1', name:'Análisis de Heurísticas',   desc:'Evaluar una aplicación web real aplicando las 10 heurísticas de Nielsen. Entrega en PDF.',          due:'25 Feb', grade:'19/20', status:'done' },
                    { id:'ux2', name:'Wireframe App Móvil',        desc:'Crear wireframes de baja fidelidad para una app de delivery usando Figma o Balsamiq.',              due:'08 Mar', grade:'--',    status:'pending' },
                    { id:'ux3', name:'Prueba de Usabilidad',       desc:'Ejecutar una prueba con 3 usuarios sobre el prototipo entregado en la semana 4.',                   due:'15 Mar', grade:'--',    status:'pending' },
                    { id:'ux4', name:'Informe Final UX',           desc:'Documento consolidado del proceso de diseño centrado en el usuario con todas las fases.',           due:'22 Mar', grade:'--',    status:'pending' }
                ]
            },
            {
                id: 3, name: 'Programación de Internet II', code: 'PI',
                instructor: 'Ing. Leonel Ivan Hercules',
                progress: 55, color: 'sky',
                resources: [
                    { name: 'Introducción a ASP.NET Core', type: 'PDF' },
                    { name: 'Guía de C# para Web',         type: 'PDF' },
                    { name: 'HTML5 y CSS3 Avanzado',       type: 'PDF' },
                    { name: 'Conexión a SQL Server desde C#', type: 'DOC' }
                ],
                weeks: [
                    { name: 'Semana 1: Repaso HTML5 y CSS3' },
                    { name: 'Semana 2: Introducción a C# y .NET' },
                    { name: 'Semana 3: ASP.NET Web Forms' },
                    { name: 'Semana 4: Controles de Servidor ASP' },
                    { name: 'Semana 5: Acceso a datos con ADO.NET' },
                    { name: 'Semana 6: MVC en ASP.NET Core' }
                ],
                activities: [
                    { id:'pi1', name:'Página Web HTML5/CSS3',              desc:'Crear un sitio estático de 5 páginas con HTML5 semántico y CSS3 responsivo.',                   due:'22 Feb', grade:'20/20', status:'done' },
                    { id:'pi2', name:'Formulario ASP.NET con Validaciones', desc:'Formulario de registro en Web Forms con validaciones de servidor y cliente.',                   due:'07 Mar', grade:'--',    status:'pending' },
                    { id:'pi3', name:'CRUD con C# y SQL Server',           desc:'Implementar operaciones CRUD conectando ASP.NET con SQL Server.',                               due:'16 Mar', grade:'--',    status:'pending' },
                    { id:'pi4', name:'Taller de Depuración',               desc:'Corregir y documentar los errores del código fuente entregado por el docente.',                  due:'Hace 3 días', grade:'0.0', status:'delayed' }
                ]
            },
            {
                id: 4, name: 'Sistemas Operativos 2', code: 'SO',
                instructor: 'Ing. Leonel Ivan Hercules',
                progress: 70, color: 'amber',
                resources: [
                    { name: 'Sistemas Operativos — Silberschatz', type: 'PDF' },
                    { name: 'Gestión de Procesos y Threads',      type: 'PDF' },
                    { name: 'Administración de Linux Avanzado',   type: 'DOC' },
                    { name: 'Algoritmos de Planificación de CPU', type: 'PDF' }
                ],
                weeks: [
                    { name: 'Semana 1: Repaso SO y Procesos' },
                    { name: 'Semana 2: Hilos (Threads) y Concurrencia' },
                    { name: 'Semana 3: Sincronización de Procesos' },
                    { name: 'Semana 4: Interbloqueos (Deadlocks)' },
                    { name: 'Semana 5: Gestión de Memoria Virtual' },
                    { name: 'Semana 6: Sistemas de Archivos' }
                ],
                activities: [
                    { id:'so1', name:'Simulación Algoritmos de Planificación', desc:'Implementar y comparar FCFS, SJF y Round Robin usando C o Java.',                                due:'20 Feb', grade:'18/20', status:'done' },
                    { id:'so2', name:'Taller Sincronización de Procesos',       desc:'Resolver productor-consumidor y filósofo comensal usando semáforos.',                            due:'27 Feb', grade:'17/20', status:'done' },
                    { id:'so3', name:'Reporte Gestión de Memoria',              desc:'Documentar los algoritmos de reemplazo de páginas: LRU, FIFO y Óptimo.',                         due:'10 Mar', grade:'--',    status:'pending' },
                    { id:'so4', name:'Práctica Comandos Linux',                 desc:'Ejecutar y documentar 30 comandos avanzados de Linux en máquina virtual.',                        due:'Hace 1 día', grade:'0.0', status:'delayed' }
                ]
            }
        ],

        exams: [
            { id:1, name:'Parcial I: Bases de Datos 1',         date:'05 Mar, 08:00', type:'Presencial', status:'Próximamente' },
            { id:2, name:'Parcial I: Experiencia de Usuario',   date:'06 Mar, 10:00', type:'Presencial', status:'Próximamente' },
            { id:3, name:'Quiz: Consultas SQL Avanzado',         date:'Hoy, 14:00',   type:'Virtual',    status:'Disponible'  },
            { id:4, name:'Parcial I: Prog. de Internet II',     date:'07 Mar, 08:00', type:'Presencial', status:'Próximamente' },
            { id:5, name:'Parcial I: Sistemas Operativos 2',    date:'08 Mar, 09:00', type:'Presencial', status:'Próximamente' },
            { id:6, name:'Quiz: Hilos y Concurrencia',           date:'28 Feb, 11:00', type:'Virtual',   status:'Próximamente' },
            { id:7, name:'Final: Bases de Datos 1',             date:'20 Abr, 08:00', type:'Presencial', status:'Agendado'     },
            { id:8, name:'Final: Programación de Internet II',  date:'22 Abr, 08:00', type:'Presencial', status:'Agendado'     }
        ],

        books: [
            { id:1, title:'Fundamentos de Bases de Datos', author:'Silberschatz, Korth', cover:'https://covers.openlibrary.org/b/id/8091016-L.jpg'  },
            { id:2, title:'Sistemas Operativos Modernos',  author:'Andrew S. Tanenbaum',  cover:'https://covers.openlibrary.org/b/id/8231896-L.jpg'  },
            { id:3, title:'C# 10 y .NET 6',               author:'Mark J. Price',        cover:'https://covers.openlibrary.org/b/id/10521543-L.jpg' },
            { id:4, title:'HTML y CSS: Diseño Web',        author:'Jon Duckett',          cover:'https://covers.openlibrary.org/b/id/8258658-L.jpg'  },
            { id:5, title:"Don't Make Me Think",           author:'Steve Krug',           cover:'https://covers.openlibrary.org/b/id/7890562-L.jpg'  },
            { id:6, title:'Learning SQL',                  author:'Alan Beaulieu',        cover:'https://covers.openlibrary.org/b/id/8739161-L.jpg'  }
        ],

        messages: [
            { id:1, sender:'Ing. Leonel Ivan Hercules', subject:'Cambio de fecha — Parcial BD1',   text:'Estimados, el Parcial I de Bases de Datos 1 se reprogramó para el martes 05 de marzo, 8:00 AM, Aula 301. Estudien SQL y normalización.',                                                        time:'15 min',  unread:true,  initial:'L', color:'indigo' },
            { id:2, sender:'Ing. Leonel Ivan Hercules', subject:'Material Semana 5 — Internet II', text:'Subo el material de la semana 5 sobre ADO.NET. Descárguenlo antes de la clase del miércoles. Incluye el proyecto de ejemplo.',                                                                     time:'2 h',     unread:true,  initial:'L', color:'sky'    },
            { id:3, sender:'Ing. Leonel Ivan Hercules', subject:'Entrega pendiente — SO2',         text:'Noto que varios no entregaron la práctica de Linux. Tienen 48 horas de prórroga. Nota máxima 15/20. Adjunten en el aula virtual.',                                                                 time:'5 h',     unread:false, initial:'L', color:'amber'  },
            { id:4, sender:'Ing. Leonel Ivan Hercules', subject:'Recordatorio: Proyecto Final UX', text:'El informe final de UX debe incluir todas las fases del DCD. Revisen la rúbrica en el aula. Fecha límite 22 de marzo, sin prórroga.',                                                              time:'1 día',   unread:false, initial:'L', color:'violet' },
            { id:5, sender:'Ing. Leonel Ivan Hercules', subject:'Quiz Virtual — BD1 disponible',   text:'El quiz de SQL Avanzado ya está activo. Tienen hasta las 11:59 PM de hoy. 10 preguntas, 30 minutos. Sin intentos adicionales.',                                                                    time:'3 días',  unread:false, initial:'L', color:'indigo' }
        ],

        schedule: [
            { day:'Lunes',    classes:[ { name:'Bases de Datos 1',         time:'07:00 – 09:00', room:'Lab Cómputo 2' }, { name:'Sistemas Operativos 2',      time:'11:00 – 13:00', room:'Aula 305'      } ] },
            { day:'Martes',   classes:[ { name:'Experiencia de Usuario',   time:'08:00 – 10:00', room:'Lab Diseño'    }, { name:'Programación de Internet II',time:'14:00 – 16:00', room:'Lab Cómputo 1'  } ] },
            { day:'Miércoles',classes:[ { name:'Bases de Datos 1',         time:'07:00 – 09:00', room:'Lab Cómputo 2' }, { name:'Sistemas Operativos 2',      time:'11:00 – 13:00', room:'Aula 305'      } ] },
            { day:'Jueves',   classes:[ { name:'Experiencia de Usuario',   time:'08:00 – 10:00', room:'Lab Diseño'    }, { name:'Programación de Internet II',time:'14:00 – 16:00', room:'Lab Cómputo 1'  } ] },
            { day:'Viernes',  classes:[ { name:'Bases de Datos 1',         time:'10:00 – 12:00', room:'Aula 301'     }, { name:'Asesoría General',            time:'14:00 – 15:00', room:'Of. Docentes'   } ] }
        ]
    };

    /* ────────────────────────────────────────────
       ESTADO
    ──────────────────────────────────────────── */
    let viewHistory = ['home'];

    /* ────────────────────────────────────────────
       INIT
    ──────────────────────────────────────────── */
    document.addEventListener('DOMContentLoaded', () => {
        renderDashboard();
        renderCourses();
        renderExams();
        renderBooks();
        renderMessages();
        renderSchedule();
        filterTasks('pending');
        lucide.createIcons();
    });

    /* ────────────────────────────────────────────
       TOAST
    ──────────────────────────────────────────── */
    function showToast(text) {
        const t = document.getElementById('toast');
        document.getElementById('toast-text').innerText = text;
        t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 3000);
    }

    /* ────────────────────────────────────────────
       NAVEGACIÓN
    ──────────────────────────────────────────── */
    function switchView(viewId, element) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        const target = document.getElementById('view-' + viewId);
        if (target) target.classList.add('active');
        if (viewHistory[viewHistory.length - 1] !== viewId) viewHistory.push(viewId);
        document.getElementById('back-button').classList.toggle('hidden', viewId === 'home');
        const titles = { home:'Dashboard', courses:'Mis Materias', exams:'Exámenes', books:'Biblioteca', 'all-tasks':'Tareas', schedule:'Mi Horario', chat:'Mensajería', profile:'Perfil', 'course-detail':'Detalle Materia', 'msg-detail':'Mensaje', compose:'Redactar' };
        document.getElementById('view-indicator').innerText = titles[viewId] || 'Académico';
        if (element && element.classList.contains('nav-btn')) {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('nav-active'));
            element.classList.add('nav-active');
        } else {
            const map = { home:0, courses:1, chat:2, profile:3 };
            const btns = document.querySelectorAll('.nav-btn');
            if (map[viewId] !== undefined) { btns.forEach(b => b.classList.remove('nav-active')); btns[map[viewId]].classList.add('nav-active'); }
        }
        document.getElementById('content-scroll').scrollTop = 0;
        lucide.createIcons();
    }

    function goBack() {
        if (viewHistory.length > 1) { viewHistory.pop(); switchView(viewHistory.pop()); }
    }

    /* ────────────────────────────────────────────
       DASHBOARD
    ──────────────────────────────────────────── */
    function renderDashboard() {
        const container = document.getElementById('urgent-tasks');
        const urgent = DATA.courses.flatMap(c => c.activities.filter(a => a.status === 'pending')).slice(0, 3);
        if (!urgent.length) { container.innerHTML = `<p class="text-xs text-slate-400 py-3">Sin tareas pendientes por ahora.</p>`; return; }
        container.innerHTML = urgent.map(t => `
            <div onclick="switchView('all-tasks')" class="bg-white p-4 flex items-center gap-3 cursor-pointer transition-all" style="border:1px solid #e8edf3;border-left:3px solid #6366f1;box-shadow:0 1px 4px rgba(0,0,0,0.04)">
                <div class="flex-1">
                    <h4 class="text-sm font-semibold text-slate-700">${t.name}</h4>
                    <p class="text-[10px] text-slate-400 font-medium mt-0.5">Vence: <span class="font-semibold" style="color:#4f46e5">${t.due}</span></p>
                </div>
                <i data-lucide="chevron-right" class="w-4 h-4 text-slate-300"></i>
            </div>`).join('');
    }

    /* ────────────────────────────────────────────
       CURSOS
    ──────────────────────────────────────────── */
    function renderCourses() {
        document.getElementById('courses-list').innerHTML = DATA.courses.map(course => {
            const c = COLORS[course.color] || COLORS.slate;
            return `
            <div onclick="openCourse(${course.id})" class="bg-white p-4 flex items-center gap-4 cursor-pointer transition-all" style="border:1px solid #e8edf3;border-left:3px solid ${c.bar};box-shadow:0 1px 4px rgba(0,0,0,0.04)">
                <div class="w-11 h-11 flex items-center justify-center font-bold text-sm shrink-0" style="background:${c.bg};color:${c.text};border:1px solid ${c.border}">${course.code}</div>
                <div class="flex-1 min-w-0">
                    <h4 class="font-semibold text-slate-700 text-sm truncate">${course.name}</h4>
                    <div class="w-full h-1.5 mt-2 overflow-hidden" style="background:#f1f3f7"><div style="width:${course.progress}%;height:100%;background:${c.bar};transition:width 0.6s ease"></div></div>
                    <p class="text-[9px] text-slate-400 font-medium mt-1">${course.progress}% completado</p>
                </div>
                <i data-lucide="chevron-right" class="w-4 h-4 text-slate-300 shrink-0"></i>
            </div>`;
        }).join('');
    }

    /* ────────────────────────────────────────────
       DETALLE CURSO
    ──────────────────────────────────────────── */
    function openCourse(id) {
        const course = DATA.courses.find(c => c.id === id);
        if (!course) return;
        const col = COLORS[course.color] || COLORS.slate;

        document.getElementById('detail-course-name').innerText = course.name;
        document.getElementById('detail-instructor').innerText = course.instructor;
        const icon = document.getElementById('course-icon-detail');
        icon.innerText = course.code;
        icon.style.cssText = `background:${col.bar};color:white;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;font-size:0.9rem;font-weight:700;margin-bottom:0.75rem`;

        document.getElementById('tab-resources').innerHTML = course.resources.map(r => `
            <div class="bg-white p-4 flex justify-between items-center" style="border:1px solid #e8edf3;box-shadow:0 1px 3px rgba(0,0,0,0.03)">
                <div class="flex items-center gap-3">
                    <i data-lucide="${r.type === 'PDF' ? 'file-text' : 'file'}" class="w-4 h-4" style="color:${col.bar}"></i>
                    <span class="text-xs font-medium text-slate-600">${r.name}</span>
                </div>
                <button onclick="showToast('Abriendo ${r.name}')" class="p-2 text-slate-400" style="background:#f8fafc;border:1px solid #e8edf3">
                    <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                </button>
            </div>`).join('');

        document.getElementById('tab-weeks').innerHTML = course.weeks.map(w => `
            <div class="bg-white p-4" style="border:1px solid #e8edf3;box-shadow:0 1px 3px rgba(0,0,0,0.03)">
                <h5 class="text-xs font-semibold text-slate-600 mb-3">${w.name}</h5>
                <div class="flex gap-2">
                    <button onclick="showToast('Reproduciendo grabación')" class="flex-1 py-2 text-[9px] font-semibold uppercase flex items-center justify-center gap-1" style="background:${col.bg};color:${col.text};border:1px solid ${col.border}"><i data-lucide="play" class="w-3 h-3"></i> Ver clase</button>
                    <button onclick="showToast('Descargando PDF')" class="flex-1 py-2 text-[9px] font-semibold uppercase flex items-center justify-center gap-1" style="background:#f8fafc;color:#64748b;border:1px solid #e2e8f0"><i data-lucide="download" class="w-3 h-3"></i> PDF</button>
                </div>
            </div>`).join('');

        const statusLabel = { done:'Entregado', pending:'Pendiente', delayed:'Retrasado' };
        document.getElementById('tab-activities').innerHTML = course.activities.map(a => {
            const sc = { done: COLORS.emerald, pending: COLORS.indigo, delayed: COLORS.rose }[a.status] || COLORS.slate;
            return `
            <div class="bg-white p-4" style="border:1px solid #e8edf3;border-left:3px solid ${sc.bar};box-shadow:0 1px 3px rgba(0,0,0,0.03)">
                <div class="flex justify-between items-start mb-2">
                    <h5 class="text-xs font-semibold text-slate-700 flex-1 mr-2">${a.name}</h5>
                    <span class="text-[9px] font-semibold px-2 py-0.5 shrink-0" style="background:${sc.bg};color:${sc.text};border:1px solid ${sc.border}">${statusLabel[a.status]||a.status}</span>
                </div>
                <p class="text-[10px] text-slate-400 mb-3 leading-relaxed">${a.desc}</p>
                <div class="flex justify-between text-[9px] text-slate-400">
                    <span>Nota: <strong class="text-slate-600">${a.grade}</strong></span>
                    <span>Vence: <strong style="color:${col.bar}">${a.due}</strong></span>
                </div>
            </div>`;
        }).join('');

        switchCourseTab('resources', document.getElementById('tab-btn-resources'));
        switchView('course-detail');
    }

    function switchCourseTab(tabId, btn) {
        document.querySelectorAll('.course-tab-pane').forEach(p => p.classList.add('hidden'));
        document.getElementById('tab-' + tabId).classList.remove('hidden');
        document.querySelectorAll('.course-tab-btn').forEach(b => {
            b.style.color = '#94a3b8';
            b.style.borderBottom = '2px solid transparent';
        });
        btn.style.color = '#4f46e5';
        btn.style.borderBottom = '2px solid #4f46e5';
        lucide.createIcons();
    }

    /* ────────────────────────────────────────────
       EXÁMENES
    ──────────────────────────────────────────── */
    function renderExams() {
        document.getElementById('exams-list').innerHTML = DATA.exams.map(ex => {
            const isAvail = ex.status === 'Disponible';
            return `
            <div onclick="showToast('Cargando: ${ex.name}')" class="bg-white p-4 flex items-center gap-4 cursor-pointer transition-all" style="border:1px solid #e8edf3;border-left:3px solid #f43f5e;box-shadow:0 1px 4px rgba(0,0,0,0.04)">
                <div class="w-10 h-10 flex items-center justify-center shrink-0" style="background:#fff1f2;border:1px solid #fecdd3">
                    <i data-lucide="file-text" class="w-4 h-4" style="color:#e11d48"></i>
                </div>
                <div class="flex-1 min-w-0">
                    <h4 class="text-sm font-semibold text-slate-700 truncate">${ex.name}</h4>
                    <p class="text-[10px] text-slate-400 font-medium mt-0.5">${ex.date} · ${ex.type}</p>
                </div>
                <span class="text-[9px] font-semibold px-2 py-1 shrink-0" style="background:${isAvail?'#f0fdf4':'#f8fafc'};color:${isAvail?'#059669':'#64748b'};border:1px solid ${isAvail?'#a7f3d0':'#e2e8f0'}">${ex.status}</span>
            </div>`;
        }).join('');
    }

    /* ────────────────────────────────────────────
       LIBROS
    ──────────────────────────────────────────── */
    function renderBooks() {
        document.getElementById('books-list').innerHTML = DATA.books.map(book => `
            <div class="bg-white p-3 text-center" style="border:1px solid #e8edf3;box-shadow:0 1px 4px rgba(0,0,0,0.04)">
                <img src="${book.cover}" class="w-full aspect-[3/4] object-cover mb-3" style="border:1px solid #f1f3f7" onerror="this.src='https://via.placeholder.com/120x160/eef2ff/4f46e5?text=${book.code||'📖'}'">
                <h4 class="text-[11px] font-semibold truncate text-slate-700">${book.title}</h4>
                <p class="text-[10px] text-slate-400 mb-2 truncate">${book.author}</p>
                <button onclick="showToast('Descargando: ${book.title}')" class="w-full py-2 text-[9px] font-semibold uppercase" style="background:#f0fdf4;color:#059669;border:1px solid #a7f3d0">Descargar PDF</button>
            </div>`).join('');
    }

    /* ────────────────────────────────────────────
       TAREAS
    ──────────────────────────────────────────── */
    function filterTasks(status, btn) {
        if (btn) { document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
        const container = document.getElementById('global-tasks-list');
        const all = DATA.courses.flatMap(c => c.activities.map(a => ({...a, courseName: c.name, courseColor: c.color})));
        const filtered = all.filter(t => t.status === status);
        const s = { pending: COLORS.indigo, done: COLORS.emerald, delayed: COLORS.rose }[status] || COLORS.slate;
        const icons = { pending:'clock', done:'check-circle-2', delayed:'alert-triangle' };
        const labels = { pending:'Pendiente', done:'Entregado', delayed:'Retrasado' };

        if (!filtered.length) {
            container.innerHTML = `<div class="py-10 text-center text-slate-400 text-xs font-medium">Sin tareas en esta categoría</div>`;
            return;
        }
        container.innerHTML = filtered.map(t => `
            <div class="item-expand bg-white overflow-hidden" style="border:1px solid #e8edf3;border-left:3px solid ${s.bar};box-shadow:0 1px 4px rgba(0,0,0,0.04)">
                <button onclick="toggleExpand(this)" class="w-full p-4 flex justify-between items-center text-left">
                    <div class="flex items-center gap-3 flex-1 min-w-0">
                        <div class="w-8 h-8 flex items-center justify-center shrink-0" style="background:${s.bg};border:1px solid ${s.border}">
                            <i data-lucide="${icons[status]}" class="w-3.5 h-3.5" style="color:${s.text}"></i>
                        </div>
                        <div class="min-w-0">
                            <p class="text-[9px] font-semibold uppercase tracking-widest text-slate-400 truncate">${t.courseName}</p>
                            <h4 class="text-xs font-semibold text-slate-700 truncate">${t.name}</h4>
                        </div>
                    </div>
                    <i data-lucide="chevron-down" class="chevron-icon w-4 h-4 text-slate-300 transition-transform shrink-0 ml-2"></i>
                </button>
                <div class="expand-content">
                    <div class="px-4 pb-4" style="background:#fafbfc">
                        <p class="text-[11px] text-slate-500 leading-relaxed mb-3">${t.desc}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-[9px] text-slate-400">Vence: <strong style="color:${s.bar}">${t.due}</strong></span>
                            <button onclick="showToast('Gestión en proceso...')" class="px-3 py-1.5 text-[9px] font-semibold uppercase" style="background:${s.bg};color:${s.text};border:1px solid ${s.border}">Gestionar</button>
                        </div>
                    </div>
                </div>
            </div>`).join('');
        lucide.createIcons();
    }

    function toggleExpand(btn) {
        const item = btn.closest('.item-expand');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.item-expand').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
    }

    /* ────────────────────────────────────────────
       MENSAJES
    ──────────────────────────────────────────── */
    function renderMessages() {
        document.getElementById('messages-list').innerHTML = DATA.messages.map(msg => {
            const mc = COLORS[msg.color] || COLORS.slate;
            return `
            <div onclick="openMessage(${msg.id})" class="bg-white p-4 flex gap-3 cursor-pointer transition-all" style="border:1px solid #e8edf3;${msg.unread ? `border-left:3px solid ${mc.bar};` : ''}box-shadow:0 1px 4px rgba(0,0,0,0.04)">
                <div class="w-10 h-10 flex items-center justify-center font-bold text-sm shrink-0" style="background:${mc.bg};color:${mc.text};border:1px solid ${mc.border}">${msg.initial}</div>
                <div class="flex-1 min-w-0">
                    <div class="flex justify-between items-center mb-0.5">
                        <h4 class="text-xs font-semibold text-slate-700 truncate">${msg.sender}</h4>
                        <span class="text-[9px] text-slate-400 ml-2 shrink-0">${msg.time}</span>
                    </div>
                    <p class="text-[11px] ${msg.unread ? 'font-semibold text-slate-600' : 'text-slate-400'} truncate">${msg.subject}</p>
                </div>
            </div>`;
        }).join('');
    }

    function openMessage(id) {
        const msg = DATA.messages.find(m => m.id === id);
        if (!msg) return;
        msg.unread = false;
        renderMessages();
        const mc = COLORS[msg.color] || COLORS.slate;
        document.getElementById('msg-detail-content').innerHTML = `
            <div class="flex items-center gap-4 mb-5">
                <div class="w-12 h-12 flex items-center justify-center font-bold text-lg shrink-0" style="background:${mc.bg};color:${mc.text};border:1px solid ${mc.border}">${msg.initial}</div>
                <div>
                    <h3 class="font-semibold text-slate-700">${msg.sender}</h3>
                    <p class="text-[10px] text-slate-400 font-medium mt-0.5">hace ${msg.time}</p>
                </div>
            </div>
            <h2 class="text-base font-bold text-slate-700 mb-4 leading-snug">${msg.subject}</h2>
            <div class="p-5 mb-5" style="background:white;border:1px solid #e8edf3;box-shadow:0 1px 3px rgba(0,0,0,0.03)">
                <p class="text-sm text-slate-500 leading-relaxed">${msg.text}</p>
            </div>
            <button onclick="switchView('compose')" class="w-full py-3.5 font-semibold text-sm text-white" style="background:#4f46e5">Responder</button>`;
        switchView('msg-detail');
    }

    /* ────────────────────────────────────────────
       HORARIO
    ──────────────────────────────────────────── */
    function renderSchedule() {
        document.getElementById('schedule-list').innerHTML = DATA.schedule.map(day => `
            <div>
                <div class="flex items-center gap-3 mb-2">
                    <span class="text-[10px] font-bold uppercase tracking-widest" style="color:#4f46e5">${day.day}</span>
                    <span class="flex-1 h-px" style="background:#e8edf3"></span>
                </div>
                <div class="space-y-2">
                    ${day.classes.map(c => `
                        <div class="bg-white p-4 flex justify-between items-center" style="border:1px solid #e8edf3;box-shadow:0 1px 3px rgba(0,0,0,0.03)">
                            <div>
                                <h4 class="text-sm font-semibold text-slate-700">${c.name}</h4>
                                <p class="text-[10px] text-slate-400 font-medium mt-0.5">${c.time}</p>
                            </div>
                            <span class="text-[9px] font-semibold px-2.5 py-1" style="background:#f8fafc;border:1px solid #e2e8f0;color:#64748b">${c.room}</span>
                        </div>`).join('')}
                </div>
            </div>`).join('');
    }