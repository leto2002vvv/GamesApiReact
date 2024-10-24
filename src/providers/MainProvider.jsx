import { GameCounter } from "./GameCounter"
import { GameDataProvider } from "./GameDataProvider"
import { GameProvider } from "./IsGameAddedProvider"

const MainProvider = ({ children }) => (
    <>
        <GameDataProvider>
            <GameCounter>
                <GameProvider>
                    {children}
                </GameProvider>
            </GameCounter>
        </GameDataProvider>
    </>
)

export default MainProvider