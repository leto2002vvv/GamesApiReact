import { GameProvider } from "./GameProvider";
import { GameCounter } from "./GameCounter";
import { GameDataProvider } from "./PriceAndReleaseProvider";

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

export default MainProvider;