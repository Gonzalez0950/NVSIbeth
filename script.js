
function Completar(){
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("lastname").value;
    let dob = document.getElementById("DOB").value;
    let sexo = document.getElementById("sex").value;
    let seguimiento = document.getElementById("seguimiento").value; 
    let cambios = document.getElementById("cambios").value; 
    let barreas = document.getElementById("barreras").value; 
    let avances = document.getElementById("avances").value;
    let ajustes = document.getElementById("ajustes").value;
    let estado = document.getElementById("estado").value;
    let sintomas = document.getElementById("sintomas").value;
    let cambiosE = document.getElementById("cambiosE").value;
    let registro = document.getElementById("registro").value;
    let dificultades = document.getElementById("dificultades").value;
    let cambiosR = document.getElementById("cambiosR").value;
    let cambiosAli = document.getElementById("cambiosAli").value;
    let alimentos = document.getElementById("alimentos").value;
    let cumplimientos = document.getElementById("cumplimiento").value;
    let adherencia = document.getElementById("adherencia").value;
    let momento = document.getElementById("momento").value;
    let situaciones = document.getElementById("situaciones").value;
    let recuento = document.getElementById("recuento").value;
    let rutina = document.getElementById("rutina").value;
    let dificultadesEje = document.getElementById("dificultadesEje").value;
    let sueño = document.getElementById("sueño").value;
    let agua = document.getElementById("agua").value;
    let estres = document.getElementById("estres").value;
    let estrategias = document.getElementById("estrategias").value;
    let emociones = document.getElementById("emociones").value;
    let refuerzo = document.getElementById("refuerzo").value;
    const d2 = new Date(dob);
    const d = new Date();
    let edad = d.getFullYear() - d2.getFullYear();

    let paciente = (nombre == '' && apellido == '') ? 'Paciente':`Paciente ${nombre} ${apellido}`;
    let edadR = (dob == null) ? 'edad desconocida':`${edad} años`;
    let cambiosText = (cambios == 'ninguno' || cambios == 'no' || cambios == '' || cambios == 'no cambios' || cambios == 'no refiere cambios') ? 'no refiere cambios':`refiere ${cambios}`;
    let barrera = (barreas == '' || barreas == 'no' || barreas == 'ninguno' || barreas == 'no barreras' || barreas == 'no identifica barreras') ? 'no identifica barreras':`identifica como principales barreras ${barreas}`;
    let avancesR = (avances == '' || avances == 'no' || avances == 'ninguno' || avances == 'no avances' || avances == 'no percibe avances') ? 'No percibe avances':`Percibe como avances ${avances}`;
    let ajustesR = (ajustes == '' || ajustes == 'no' || ajustes == 'ninguno' || ajustes == 'no ajustes' || ajustes == 'no se realizaron avances') ? 'no se ningun ajuste ajustes':`por lo que se realizaron ajustes al plan nutricional ${ajustes}`;
    let estadoR = (estado == '' || estado == 'no' || estado == 'ninguno' || estado == 'nada') ? 'no percibe cambios desde la ultima cita':`refiere ${estado}`;
    let CambiosER = (cambiosE == '' || cambiosE == 'no' || cambiosE == 'ninguno' || cambiosE == 'sin cambios') ? 'no registra cambios de energia':`${cambiosE}`;
    let sintomasR = (sintomas == '' || sintomas == 'no' || sintomas == 'ninguno' || sintomas == 'nada' || sintomas == 'No sintomas' || sintomas == 'no percibe sintomas') ? 'No percibe sintomas':`${sintomas}`;
    let dificultadesR = (dificultades == '' || dificultades == 'no' || dificultades == 'ninguna' || dificultades == 'sin dificultades') ? 'sin dificultades en la medicion':`${dificultades}`;
    let momentoR = (momento == '' || momento == 'no' || momento == 'ninguno' || momento == 'sin momento especifico') ? 'no tiene un momento especifico que le cause dificultades':`identifica ${momento} como su momento mas dificil`;
    let situacionesR = (situaciones == '' || situaciones == 'no' || situaciones == 'ninguna' || situaciones == 'sin situaciones especificas') ? 'no idenetifica situaciones que le causen dificultades':`identifica ${situaciones} como situaciones que le causan dificultad`;
    let alimentosR = (alimentos == '' || alimentos == 'no' || alimentos == 'ninguno' || alimentos == 'sin cambios') ? 'no realizo ningun cambio de alimentos':`${alimentos}`;
    let cambiosAliR = (cambiosAli == '' || cambiosAli == 'no' || cambiosAli == 'ninguno' || cambiosAli == 'sin cambios') ? 'no realizo ningun cambio en alimentacion':`${cambiosAli}`;
    let difiRultadesEjeR = (dificultadesEje == '' || dificultadesEje == 'no' || dificultadesEje == 'ninguna' || dificultadesEje == 'sin dificultades') ? 'no percibe dificultades para cumplir el ejercicio':`${dificultadesEje}`;
    let estrategiasR = (estrategias == '' || estrategias == 'no' || estrategias == 'ninguna' || alimentos == 'sin estrategias') ? 'no utilizó ninguna estrategia':`${estrategias}`;

    let text = `Paciente ${sexo} de ${edadR} en seguimiento nutricional por ${seguimiento}, quien refiere ${cambiosText}; Identifica como principales barreras ${barrera}. 
    Percibe como avances${avancesR}, ${ajustesR}. ${cambiosAliR}, ${alimentosR}, ${cumplimientos}, con adherencia estimada de ${adherencia}; ${momentoR}, ${situacionesR}. Recuento de 24 horas ${recuento}. 
    ${rutina}, ${difiRultadesEjeR}. Duerme ${sueño}, consume ${agua} de agua y reporta nivel de estrés ${estres},
    ${estrategiasR} ${emociones}. ${refuerzo}`;

    const paragraph = document.getElementById("myParagraph");
    paragraph.textContent = text;
}

