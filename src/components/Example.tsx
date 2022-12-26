import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Example() {
    const countState = useSelector((state: RootState) => state.counter.value);

    return  <div>
        Result: {countState}
    </div>
}
