import { StateService } from '@uirouter/angularjs';

class UsersController {
  constructor(private $state: StateService) {}

  navigateToAngular(): void {
    this.$state.go('projects.project', { id: 123 }, { reload: true });
  }
}


export const usersComponent = {
  template: `
  <div class="ajs-cmp">
    <b>Users component</b>
    <button
      class="btn btn-primary btn-sm"
      ng-click="$ctrl.navigateToAngular()">
      Go to Angular Project component
    </button>
    <div ui-view></div>
  </div>
  `,
  controller: UsersController
}
