
///
/// It's a simple model for switch components via url check
/// in homepage pass the prop "path" directly via component and
/// function return the children component equal to path (or nothing)
///

//...
export default function Route ({ path, children_component }) {
    return window.location.pathname === path ? children_component : null
}
  