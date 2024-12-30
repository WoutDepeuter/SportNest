import {DispatchWithoutAction, ReactNode} from "react";
import {FilterNode} from "@/Components/Table/table_base";


export function WrapFilter<T, U>(filter: FilterNode<T>, map: (u: U) => T): FilterNode<U> {
    return new class extends FilterNode<U> {
        check(value: U): boolean {
            return filter.check(map(value));
        }

        renderWithDispatch(update: DispatchWithoutAction): ReactNode {
            return filter.renderWithDispatch(update);
        }
    }
}
