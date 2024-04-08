export interface ITreeNode<T = unknown> {
    value: T;
    children: ITreeNode<T>[];
  }
  
  export function TreeNode<T>(
    value: T,
    children: ITreeNode<T>[] = []
  ): ITreeNode<T> {
    return { value, children };
  }
  