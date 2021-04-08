TDD VS BDD VS ATDD

Un tema que se suele confundir bastante es sobre las distintas DDs que existen actualmente, por eso quería escribir un poco sobre las diferencias entre las mismas.

PRIMERO, LAS DEFINICIONES
TDD (Test Driven Development) Esto significa escribir una prueba que falla porque la funcionalidad especificada no existe, entonces  prosigo con escribir el código más simple que puede hacer pasar la prueba, a continuación, se realiza la refactorización para eliminar la duplicación y el ciclo se repite hasta que la funcionalidad esta lista.

BDD (Behauvior Driven Development) Esto significa crear una especificación/requerimiento ejecutable que falla porque la característica no existe, entonces  prosigo con escribir el código más simple que puede hacer pasar la especificación, a continuación, se realiza la refactorización para eliminar la duplicación y el ciclo se repite hasta que la especificación esta lista.

ATDD (Acceptance Test Driven Development) Esto significa que todo el equipo discute en colaboración criterios de aceptación, con ejemplos, y luego los divide en un conjunto de pruebas de aceptación en concreto antes de que comience el desarrollo. ATDD es mas cercano a un proceso mas que una actividad.

DIFERENCIAS
Si leemos las definiciones de TDD y BDD parecen que son la misma cosa, la principal diferencia entre ambas esta en el alcance. TDD es una practica de desarrollo (se enfoca en como escribir el código y como debería trabajar ese código) mientras que BDD es una metodología de equipo(Se enfoca en porque debes escribir ese código y como se debería comportar ese código).

En TDD el desarrollador escribe los tests mientras que en BDD el usuario final(o PO o analista) en conjunto con los testers escriben los tests (y los Devs solo generan el código necesario para correr esos tests)

Si vamos a caso de ATDD, la misma es mas cercana a BDD ya que no es una practica, sino una metodología de trabajo, pero la diferencia esta nuevamente en el alcance, a diferencia de BDD, ATDD se extiende aun mas en profundizar la búsqueda de que lo que se esta haciendo no solo se hace en forma correcta, sino que también es lo correcto a hacer. En la gráfica vemos el alcance de ATDD.

ATDD cycle model developed by James Shore with changes suggested by Grigori Melnick, Brian Marick, and Elisabeth Hendrickson.
Por James Shore, Grigori Melnick, Brian
Marick, y Elisabeth Hendrickson.
Si comparamos los 3 podemos decir que TDD se ocupa solo a nivel unitario o una porción pequeña de la aplicación en desarrollo, BDD se va a ocupar de que las pruebas sobre la integración de esas unidades a un nivel de negocio para que no solo sean pruebas sino que también sean documentación viva de la aplicación al alcance de cualquier usuario y en su mismo idioma (términos que usa comúnmente). Por ultimo ATDD pasa a participar a nivel de la creación de la US, asegurándose que estamos construyendo lo que el cliente realmente necesita en esta etapa de desarrollo.

Sobre BDD y ATDD, hay un gran debate en cuanto a si estas metodologías son tan diferentes al final de cuentas, pero como pasa con muchos términos en la industria del software, hay quienes lo consideran lo mismo y quienes no. Desde mi lado considero las diferencias planteadas en el actual post. Pueden ver un poco sobre esta discusión de BDD y ATDD aquí y aquí.

BDD VS BDD
Es importante saber que BDD también puede ser considerado para aplicarse a nivel unitario (métodos), ya que no hay nada que evite el uso de BDD para complementar/reemplazar TDD y en lugar de escribir Given-When-Then para pruebas de integración, podemos usar el mismo a nivel unitario y así complementar/reemplazar las pruebas en TDD.

QUE TENGO USAR? TDD, BDD O ATDD?
Puedes usarlos a todos, si bien hay puntos en que se pueden superponer (por ejemplo, la creación de Criterios de aceptacion en ATDD pueden reusarse en los escenarios de BDD) las tres herramientas sirven para utilizar de una forma eficiente durante el sprint en nuestro proyecto agile.

Necesitamos un rápido feedback de nuestro código (TDD), necesitamos saber que las distintas porciones de código desarrollados se integran según lo esperado (BDD) y simplificando bastante el concepto de ATDD, necesitamos saber que estamos construyendo lo correcto (BDD contribuye a esto mismo).




Desarrollo orientado a pruebas (TDD)¶
Test Driven Development (TDD), o desarrollo orientado a pruebas, es un proceso de desarrollo de software muy conocido, que consiste en la repetición de ciclos de desarrollo muy cortos.

Los requisitos se convierten en pruebas, unidades de código que prueban una determinada funcionalidad.
Entonces, se produce el código justo que permite pasar dicha prueba.
Este proceso es opuesto a otros sistemas de desarrollo que permiten incorporar código que no se sabe con certeza si concuerdan o no con los requisitos.

Los test que se pueden realizar pueden ser de unidad, funcionales y de aceptación. Para todos estos tipos de test, en TypeScript podemos usar Jest.

Ciclo del desarrollo orientado a pruebas¶
Añade un test
Ejecuta los test y comprueba que el nuevo test falla
Escribe el código
Ejecuta los test
Refactoriza el código
Repite


Las tres reglas¶
Robert Martin, en su libro "Clean Code. A Handbook of agile software craftsmanship", especifica las tres reglas que deben seguirse cuando se desarrolla con TDD:

No debes escribir código de producción hasta que hayas escrito una prueba unitaria que falle.
No debes escribir más de una prueba unitaria que sea suficiente para fallar y el sistema no compile.
No debes escribir más código de producción que el suficiente para superar la prueba que esté fallando actualmente.
Desarrollo orientado a comportamiento (BDD)¶
Behaviour Driven Development (BDD), o desarrollo orientado a comportamiento, es un proceso de desarrollo similar a TDD, solo que con BDD lo que se realiza es definir el comportamiento y las especificaciones, al contrario que con TDD que se limita solamente a comprobar funcionalidades.

Los test que se pueden realizar pueden ser de unidad, funcionales y de aceptación.

Ciclo del desarrollo orientado a comportamiento¶
Describe el comportamiento del software a través de pruebas
Ejecuta los test y comprueba que el nuevo test falla
Implementa el nuevo comportamiento
Ejecuta los test
Mejora el código
Repite