import random
from datetime import datetime

inicio = datetime(2020, 5, 21)
final =  datetime(2020, 5, 26)

nombresMasculinos = ["Rafael", "Manolo", "Juan", "José", "Victor", "Borja", "Ruben", "Alberto", "Antonio"]

nombresFemeninos = ["Maria", "Paloma", "Gloria", "Cristina", "Ana", "Rosa", "Marta", "Paola"]

apellidos = ["Panal", "Perez", "Galafate", "Montero", "Roman", "Aguilar","Gonzalez", "Vazquez", "Merino", "Menacho", "Jimenez", "Reina"]

correo_electronico = "example@gmail.com"

probSexo = 0.5
probNombComp = 0.1
ASISTENTES = []

f= open("asistentes.txt","w+")


for x in range(10):
    random_date1 = inicio + (final - inicio) * random.random()
    random_date2 = inicio + (final - inicio) * random.random()
    inscripcion = random.randrange(1,5,1)
    while(random_date2 < random_date1):
        random_date2 = inicio + (final - inicio) * random.random()
    

    if(random.random() < probSexo): #Masculino
        nombre = nombresMasculinos[random.randrange(0,len(nombresMasculinos)-1,1)]
        if(random.random() < probNombComp):
            nombre += (" " + nombresMasculinos[random.randrange(0,len(nombresMasculinos)-1,1)])
        apellido = apellidos[random.randrange(0,len(apellidos)-1,1)]
        apellido += (" " + apellidos[random.randrange(0,len(apellidos)-1,1)])
        ASISTENTES.append("{" + "\"nombre\": " + "\"" + nombre + "\"" + ", \n" + "\"apellidos\": " + "\"" +apellido + "\"" + ", \n" + "\"correo\": " + "\"" + correo_electronico + "\"" +", \n" + "\"fechaentrada\": " + "\"" + random_date1.strftime("%d") + "/" +  random_date1.strftime("%m") + "/" +  random_date1.strftime("%Y") + "\"" + ", \n" + "\"fechasalida\": " + "\"" + random_date2.strftime("%d") + "/" +  random_date2.strftime("%m") + "/" +  random_date2.strftime("%Y") +"\"" + ", \n"  + "\"inscripcion\": " + str(inscripcion)  + "\n" "}" + ",")
    
    else: #Femenino
        nombre = nombresFemeninos[random.randrange(0,len(nombresFemeninos)-1,1)]
        if(random.random() < probNombComp):
            nombre += (" " + nombresFemeninos[random.randrange(0,len(nombresFemeninos)-1,1)])
        apellido = apellidos[random.randrange(0,len(apellidos)-1,1)]
        apellido += (" " + apellidos[random.randrange(0,len(apellidos)-1,1)])
        ASISTENTES.append("{" + "\"nombre\": " + "\"" + nombre + "\"" + ", \n" + "\"apellidos\": " + "\"" +apellido + "\"" +", \n" + "\"correo\": " + "\"" + correo_electronico + "\"" +", \n" + "\"fechaentrada\": " + "\"" + random_date1.strftime("%d") + "/" +  random_date1.strftime("%m") + "/" +  random_date1.strftime("%Y") + "\"" + ", \n" + "\"fechasalida\": " + "\"" + random_date2.strftime("%d") + "/" +  random_date2.strftime("%m") + "/" +  random_date2.strftime("%Y") + "\"" + ", \n"  + "\"inscripcion\": " + str(inscripcion) + "\n""}" + ",")
    f.write(ASISTENTES[x])




    

    




