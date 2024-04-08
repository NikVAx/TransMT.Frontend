import { Observer } from '../observer';
import { ITreeNode } from './tree.type';

interface INodeState {
  isOpen: boolean;
}

export type ITreeStateNode<T> = Omit<T, 'children'> & {
  _state: INodeState;
  _observer: Observer;
  _parent: ITreeStateNode<T> | null;
  children: ITreeStateNode<T>[];
  _update(data: Partial<INodeState>): void;
  deepIndex: number;
};

export class ViewTree<T> {
  tree = {} as ITreeStateNode<ITreeNode<T>>;

  private generateViewTree(
    tree: ITreeNode<T>[],
    parent: ITreeStateNode<ITreeNode<T>> | null,
  ): ITreeStateNode<ITreeNode<T>>[] {
    return tree.map((node) => {
      const initialState: INodeState = {
        isOpen: false,
      };

      const deepIndex = parent?.deepIndex !== undefined ? parent.deepIndex + 1 : 0;

      const viewNode = {
        ...node,
        _observer: new Observer(),
        _state: initialState,
        _parent: parent,
        deepIndex,
      } as ITreeStateNode<ITreeNode<T>>;

      viewNode._update = function (data) {
        this._state.isOpen = data.isOpen ?? this._state.isOpen;
        if (viewNode._parent) {
          viewNode._parent.children.forEach((child) => {
            if (child !== viewNode) {
              child._state.isOpen = false;
              child._observer.notify();
            }
          });
        }

        this._observer.notify();
      };

      viewNode.children = this.generateViewTree(node.children, viewNode);

      return viewNode as unknown as ITreeStateNode<ITreeNode<T>>;
    });
  }

  constructor(tree: ITreeNode<T>[]) {
    this.tree.children = this.generateViewTree(tree, this.tree);
  }
}
