import storage from "redux-persist/lib/storage"; // Importa el almacenamiento que deseas usar (por ejemplo, localStorage)
import { PersistConfig } from "redux-persist/es/types";

const persistConfig: PersistConfig<RootState> = {
  key: "root", // La clave raíz para el almacenamiento persistente
  storage, // El almacenamiento a utilizar (localStorage, sessionStorage, etc.)
};

export default persistConfig;
