
import { useStore } from "../contextAPI/store/Provider";

export function GetDonateDetails(id) {
    // eslint-disable-next-line
    const [{ user }, dispatch] = useStore("");
    // eslint-disable-next-line
    user.donates.map((value) =>{
        // eslint-disable-next-line
        if(value.CampaignId == id){
            return value;
        }
    })
    return null;
}
