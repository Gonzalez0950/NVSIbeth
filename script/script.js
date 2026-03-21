
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
    
    let text = `Paciente ${nombre} ${apellido}, ${sexo} de ${edad} años en seguimiento nutricional para ${seguimiento}, 
    quien refiere ${cambios}; identifica como principales barreras ${barreas}. Percibe como avances ${avances}, por lo 
    que se realizaron ajustes al plan nutricional ${ajustes}.
    Clínicamente refiere ${estado}, ${sintomas}. En evaluación antropométrica reporta ${registro}, ${dificultades}, ${cambiosR}. Dietéticamente ha ${alimentos}},
    con adherencia estimada de ${adherencia}}; el
    momento más difícil es ${momento}, ${situaciones}. ${recuento}. ${rutina}}, ${dificultadesEje}}.
    Duerme ${sueño}, consume ${agua} y reporta nivel de estrés ${estres},
    ${estrategias}${emociones}. ${refuerzo}}`;

    document.getElementById("resultado").value = text

    alert(text);
}

