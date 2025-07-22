// script.js
const cursos = {
  "MAT1610": { nombre: "Cálculo I", prereqs: [] },
  "EAE1110": { nombre: "Intro Microeconomía", prereqs: [] },
  "EAA1210": { nombre: "Contabilidad", prereqs: [] },
  "EAA1110": { nombre: "Comportamiento Organizacional", prereqs: [] },
  "VRA100C": { nombre: "Examen Comunicación", prereqs: [] },
  "VRA2010": { nombre: "English Test ALTE 2", prereqs: [] },

  "EAA1510": { nombre: "Probabilidad y Estadística", prereqs: ["MAT1610"] },
  "MAT1279": { nombre: "Álgebra Lineal", prereqs: [] },
  "MAT1620": { nombre: "Cálculo II", prereqs: ["MAT1610"] },
  "EAE1210": { nombre: "Intro Macroeconomía", prereqs: ["EAE1110"] },
  "FIL2001": { nombre: "Filosofía", prereqs: [] },
  "VRA3010": { nombre: "English Test ALTE 3", prereqs: [] },

  "EAA1520": { nombre: "Inferencia Estadística", prereqs: ["EAA1510"] },
  "EAF2010": { nombre: "Aplicaciones Mat. Economía", prereqs: ["MAT1279", "MAT1620"] },
  "EAE1220": { nombre: "Análisis Económico", prereqs: ["EAE1210"] },

  "EAE2510": { nombre: "Econometría", prereqs: ["EAA1510", "EAA1520"] },
  "EAA1220": { nombre: "Fundamentos de Finanzas", prereqs: ["EAA1210"] },
  "EAA2310": { nombre: "Fundamentos de Marketing", prereqs: ["EAA1210", "EAA1110"] },
  "EAA2410": { nombre: "Estrategia Organización", prereqs: ["EAA1110"] },
  "TTF": { nombre: "Teológico", prereqs: [] },

  "EAE2110": { nombre: "Microeconomía I", prereqs: ["EAF2010", "EAE1220"] },
  "EAA2210": { nombre: "Teoría Financiera", prereqs: ["EAE2110", "EAE2510", "IIC1103"] },
  "EAA2320": { nombre: "Marketing Analytics", prereqs: ["EAA2310", "EAE2510"] },

  "EAE2120": { nombre: "Microeconomía II", prereqs: ["EAE2110"] },
  "EAE2210": { nombre: "Macroeconomía I", prereqs: ["EAE1220", "EAE2510"] },
  "EAA2220": { nombre: "Contabilidad de Costos", prereqs: ["EAA2410"] },
  "IIC1103": { nombre: "Intro a la programación", prereqs: [] },

  "EAA2420": { nombre: "Estrategia Competitiva", prereqs: ["EAE2120", "EAA2410"] },
  "ETI209": { nombre: "Ética Economía Empresa", prereqs: ["EAE1220", "EAA2410"] },
  "EAF2500": { nombre: "Práctica Social", prereqs: ["EAE2120", "EAE2210", "EAA2220", "EAA2310", "EAA2110"] },

  "EAE2220": { nombre: "Macroeconomía II", prereqs: ["EAE2210"] },
  "EAA2240": { nombre: "Contabilidad Gerencial", prereqs: ["EAA2220", "EAE2210"] },
  "EAA2230": { nombre: "Empresa y Legislación", prereqs: ["EAA2410"] },
  "EAA2110": { nombre: "Dirección de Personas", prereqs: ["EAE1110", "ETI209"] },

  "EAA3401": { nombre: "Dirección Empresas y Estrategia", prereqs: ["EAA2320", "EAA2240", "EAA2110"] },
  "EAA3201": { nombre: "Dirección Financiera", prereqs: ["EAA2240", "EAA3401"] },
  "EAA3501": { nombre: "Gestión de Operaciones", prereqs: ["EAA2420", "EAE2510"] },
  "EAA3601": { nombre: "Creación de Nuevas Empresas", prereqs: ["EAA2420", "EAA3201", "EAA3401"] },
  "EAA3101": { nombre: "Liderazgo Estratégico", prereqs: ["EAA2110", "EAA3401"] },
  "EAA3500": { nombre: "Práctica Profesional", prereqs: ["EAF2500"] }
};

const malla = document.getElementById("malla");

function renderCursos() {
  for (const sigla in cursos) {
    const div = document.createElement("div");
    div.className = "curso";
    div.id
