import { gameCardProps } from "../components/GameCard"; 

export interface GaneParmsProps extends gameCardProps {
    id: Number;
    name: string,
    ads: string,
    cover: ImageSourcePropType
}

export declare global {
    namespace ReactNavigation{
        interface RootParamList {
            home: undefined;
            game: { 
                id: Number;
                name: string,
                ads: string,
                cover: ImageSourcePropType,
                data: string
            } ;
            viewPost: {
                id: Number, 
                cover: ImageSourcePropType
            };
        }
    }
}