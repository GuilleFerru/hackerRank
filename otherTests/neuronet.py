import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.utils import plot_model

# Datos de entrada y salida
X = np.array([
    [10, 11, 48, 16, 43, 29, 58, 33, 46, 5],
    [48, 8, 25, 37, 27, 43, 45, 12, 30, 30],
    [47, 32, 5, 49, 37, 60, 13, 40, 38, 22]
], dtype=float)

y = np.array([
    [63, 59, 75, 49, 53],
    [73, 57, 67, 55, 53],
    [65, 53, 75, 79, 71]
], dtype=float)

# Normalizar los datos para que estén en el rango [0, 1]
X_max = np.max(X)
y_max = np.max(y)
X = X / X_max
y = y / y_max

# Crear el modelo
model = Sequential([
    Dense(64, input_shape=(X.shape[1],), activation='relu'),
    Dense(32, activation='relu'),
    Dense(y.shape[1], activation='linear')  # Salida con el tamaño de y
])

# Compilar
model.compile(optimizer='adam', loss='mse', metrics=['mae'])

# Entrenar
print("-------\n")
print("Entrenando el modelo...")
model.fit(X, y, epochs=500, verbose=0)

# Hacer predicciones
predicciones = model.predict(X)
predicciones_originales = predicciones * y_max
predicciones_redondeadas = np.round(predicciones_originales)

print("\nPredicciones en su rango original:")
print(predicciones_redondeadas)

print("\nModelo:")
print(model.summary())

plot_model(model, to_file="modelo.png", show_shapes=True, show_layer_names=True)