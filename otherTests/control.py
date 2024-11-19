import numpy as np
import matplotlib.pyplot as plt

# Parámetros del sistema
time = np.linspace(0, 150, 1000)  # Tiempo entre 0 y 100 unidades
upper_limit = 55  # Límite superior de la variable de proceso
lower_limit = 45  # Límite inferior de la variable de proceso

# Generar la señal de la variable de proceso (controlada entre límites)
process_variable = 50 + 5.5 * np.sin(3 * np.pi * time / 20)  # Oscilación alrededor de 50
noise = np.random.normal(0, 0.05, size=process_variable.shape)  # Ruido normal (media=0, desviación estándar=0.5)
process_variable += noise  # Agregar el ruido a la señal sinusoidal

# Generar la salida del controlador On-Off sincronizada con la frecuencia de la variable de proceso
controller_output = np.zeros_like(time)
controller_state = 0  # Estado inicial del controlador (0: OFF, 1: ON)

for i in range(1, len(time)):
    if process_variable[i] < lower_limit:
        controller_state = 1  # Activar (ON)
    elif process_variable[i] > upper_limit:
        controller_state = 0  # Desactivar (OFF)
    controller_output[i] = controller_state

# Crear los gráficos
plt.figure(figsize=(12, 8))

# Gráfico de la Variable de Proceso
plt.subplot(2, 1, 1)
plt.plot(time, process_variable, 'b-', label='Variable de Proceso', linewidth=2)
plt.axis((0, 150, 43, 60))
plt.axhline(upper_limit, color='r', linestyle='--', label='Límite Superior')
plt.axhline(lower_limit, color='g', linestyle='--', label='Límite Inferior')
plt.title('Variable de Proceso Controlada por Controlador On-Off')
plt.ylabel('Variable de Proceso')
plt.legend(loc='upper right')
plt.grid()

# Gráfico de la Salida del Controlador
plt.subplot(2, 1, 2)
plt.step(time, controller_output * 10 + 45, 'm-', where='post', label='Salida del Controlador (ON/OFF)', linewidth=2)
plt.axis((0, 150, 43, 57))
plt.title('Salida del Controlador On-Off')
plt.xlabel('Tiempo')
plt.ylabel('Estado del Controlador')
plt.yticks([45, 55], ['OFF', 'ON'])
plt.legend(loc='upper right')
plt.grid()

# Ajustar el diseño y mostrar
plt.tight_layout()
plt.show()
