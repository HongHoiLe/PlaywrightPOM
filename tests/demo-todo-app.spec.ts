// import { test, expect } from '@playwright/test';
// import { TodoPage } from '../pages';

// const TODO_ITEMS = [
//   'buy some cheese',
//   'feed the cat',
//   'book a doctors appointment'
// ] as const;

// let todoPage: TodoPage;

// test.beforeEach(async ({ page }) => {
//   todoPage = new TodoPage(page);
//   await todoPage.goto();
// });

// test.describe('New Todo', () => {
//   test('should allow me to add todo items', async () => {
//     await test.step('Create first todo item', async () => {
//       await todoPage.addTodo(TODO_ITEMS[0]);
//     });

//     await test.step('Verify list has one todo item', async () => {
//       await todoPage.expectTodoTitles([TODO_ITEMS[0]]);
//     });

//     await test.step('Create second todo item', async () => {
//       await todoPage.addTodo(TODO_ITEMS[1]);
//     });

//     await test.step('Verify list has two todo items', async () => {
//       await todoPage.expectTodoTitles([TODO_ITEMS[0], TODO_ITEMS[1]]);
//     });

//     await test.step('Verify todos are persisted in local storage', async () => {
//       await todoPage.checkNumberOfTodosInLocalStorage(2);
//     });
//   });

//   test('should clear text input field when an item is added', async () => {
//     await test.step('Create a todo item', async () => {
//       await todoPage.addTodo(TODO_ITEMS[0]);
//     });

//     await test.step('Verify input field is cleared', async () => {
//       await todoPage.expectNewTodoInputEmpty();
//     });

//     await test.step('Verify todo is persisted in local storage', async () => {
//       await todoPage.checkNumberOfTodosInLocalStorage(1);
//     });
//   });

//   test('should append new items to the bottom of the list', async ({ page }) => {
//     await test.step('Create 3 todo items', async () => {
//       await todoPage.addMultipleTodos(TODO_ITEMS);
//     });

//     await test.step('Verify todo count displays "3 items left"', async () => {
//       await expect(page.getByText('3 items left')).toBeVisible();
//       await todoPage.expectTodoCountText('3 items left');
//       await todoPage.expectTodoCountText('3');
//       await todoPage.expectTodoCountText(/3/);
//     });

//     await test.step('Verify all items appear in correct order', async () => {
//       await todoPage.expectTodoTitles(TODO_ITEMS);
//     });

//     await test.step('Verify todos are persisted in local storage', async () => {
//       await todoPage.checkNumberOfTodosInLocalStorage(3);
//     });
//   });
// });

// test.describe('Mark all as completed', () => {
//   test.beforeEach(async () => {
//     await todoPage.addMultipleTodos(TODO_ITEMS);
//     await todoPage.checkNumberOfTodosInLocalStorage(3);
//   });

//   test.afterEach(async () => {
//     await todoPage.checkNumberOfTodosInLocalStorage(3);
//   });

//   test('should allow me to mark all items as completed', async () => {
//     await test.step('Click "Mark all as complete" checkbox', async () => {
//       await todoPage.markAllAsComplete();
//     });

//     await test.step('Verify all todos have "completed" class', async () => {
//       await todoPage.expectTodoItemsClasses(['completed', 'completed', 'completed']);
//     });

//     await test.step('Verify completed count in local storage', async () => {
//       await todoPage.checkNumberOfCompletedTodosInLocalStorage(3);
//     });
//   });

//   test('should allow me to clear the complete state of all items', async () => {
//     await test.step('Mark all items as complete', async () => {
//       await todoPage.markAllAsComplete();
//     });

//     await test.step('Unmark all items as complete', async () => {
//       await todoPage.unmarkAllAsComplete();
//     });

//     await test.step('Verify no todos have "completed" class', async () => {
//       await todoPage.expectTodoItemsClasses(['', '', '']);
//     });
//   });

//   test('complete all checkbox should update state when items are completed / cleared', async () => {
//     await test.step('Mark all items as complete', async () => {
//       await todoPage.markAllAsComplete();
//     });

//     await test.step('Verify toggle all checkbox is checked', async () => {
//       await todoPage.expectToggleAllChecked();
//       await todoPage.checkNumberOfCompletedTodosInLocalStorage(3);
//     });

//     await test.step('Uncheck first todo item', async () => {
//       await todoPage.uncheckNthTodo(0);
//     });

//     await test.step('Verify toggle all checkbox becomes unchecked', async () => {
//       await todoPage.expectToggleAllNotChecked();
//     });

//     await test.step('Re-check first todo item', async () => {
//       await todoPage.checkNthTodo(0);
//       await todoPage.checkNumberOfCompletedTodosInLocalStorage(3);
//     });

//     await test.step('Verify toggle all checkbox is checked again', async () => {
//       await todoPage.expectToggleAllChecked();
//     });
//   });
// });

// test.describe('Item', () => {

//   test('should allow me to mark items as complete', async () => {
//     await test.step('Create two todo items', async () => {
//       for (const item of TODO_ITEMS.slice(0, 2)) {
//         await todoPage.addTodo(item);
//       }
//     });

//     await test.step('Mark first item as complete', async () => {
//       await todoPage.checkNthTodo(0);
//     });

//     await test.step('Verify first item has "completed" class', async () => {
//       await todoPage.expectNthTodoClass(0, 'completed');
//     });

//     await test.step('Verify second item is not completed', async () => {
//       await todoPage.expectNthTodoNotClass(1, 'completed');
//     });

//     await test.step('Mark second item as complete', async () => {
//       await todoPage.checkNthTodo(1);
//     });

//     await test.step('Verify both items are marked as completed', async () => {
//       await todoPage.expectNthTodoClass(0, 'completed');
//       await todoPage.expectNthTodoClass(1, 'completed');
//     });
//   });

//   test('should allow me to un-mark items as complete', async () => {
//     await test.step('Create two todo items', async () => {
//       for (const item of TODO_ITEMS.slice(0, 2)) {
//         await todoPage.addTodo(item);
//       }
//     });

//     await test.step('Mark first item as complete', async () => {
//       await todoPage.checkNthTodo(0);
//     });

//     await test.step('Verify first item is completed and second is not', async () => {
//       await todoPage.expectNthTodoClass(0, 'completed');
//       await todoPage.expectNthTodoNotClass(1, 'completed');
//       await todoPage.checkNumberOfCompletedTodosInLocalStorage(1);
//     });

//     await test.step('Unmark first item as complete', async () => {
//       await todoPage.uncheckNthTodo(0);
//     });

//     await test.step('Verify both items are not completed', async () => {
//       await todoPage.expectNthTodoNotClass(0, 'completed');
//       await todoPage.expectNthTodoNotClass(1, 'completed');
//       await todoPage.checkNumberOfCompletedTodosInLocalStorage(0);
//     });
//   });

//   test('should allow me to edit an item', async ({ page }) => {
//     await test.step('Create default todo items', async () => {
//       await todoPage.addMultipleTodos(TODO_ITEMS);
//     });

//     await test.step('Double-click second item to enter edit mode', async () => {
//       await todoPage.doubleClickNthTodo(1);
//     });

//     await test.step('Verify edit input has correct value', async () => {
//       const editInput = todoPage.getNthTodoEditInput(1);
//       await expect(editInput).toHaveValue(TODO_ITEMS[1]);
//     });

//     await test.step('Edit the todo text and save', async () => {
//       const editInput = todoPage.getNthTodoEditInput(1);
//       await editInput.fill('buy some sausages');
//       await editInput.press('Enter');
//     });

//     await test.step('Verify the edited todo text is updated', async () => {
//       await todoPage.expectTodoTitles([
//         TODO_ITEMS[0],
//         'buy some sausages',
//         TODO_ITEMS[2]
//       ]);
//     });

//     await test.step('Verify changes are persisted in local storage', async () => {
//       await todoPage.checkTodosInLocalStorage('buy some sausages');
//     });
//   });
// });

// test.describe('Editing', () => {
//   test.beforeEach(async () => {
//     await todoPage.addMultipleTodos(TODO_ITEMS);
//     await todoPage.checkNumberOfTodosInLocalStorage(3);
//   });

//   test('should hide other controls when editing', async ({ page }) => {
//     await test.step('Double-click second item to enter edit mode', async () => {
//       await todoPage.doubleClickNthTodo(1);
//     });

//     await test.step('Verify checkbox is hidden during edit', async () => {
//       await expect(todoPage.todoItems.nth(1).getByRole('checkbox')).not.toBeVisible();
//     });

//     await test.step('Verify label is hidden during edit', async () => {
//       await expect(todoPage.todoItems.nth(1).locator('label', {
//         hasText: TODO_ITEMS[1],
//       })).not.toBeVisible();
//     });

//     await test.step('Verify todos count in local storage unchanged', async () => {
//       await todoPage.checkNumberOfTodosInLocalStorage(3);
//     });
//   });

//   test('should save edits on blur', async () => {
//     await test.step('Double-click second item to enter edit mode', async () => {
//       await todoPage.doubleClickNthTodo(1);
//     });

//     await test.step('Edit the todo text', async () => {
//       const editInput = todoPage.getNthTodoEditInput(1);
//       await editInput.fill('buy some sausages');
//     });

//     await test.step('Trigger blur event to save changes', async () => {
//       const editInput = todoPage.getNthTodoEditInput(1);
//       await editInput.dispatchEvent('blur');
//     });

//     await test.step('Verify todo text is updated', async () => {
//       await todoPage.expectTodoTitles([
//         TODO_ITEMS[0],
//         'buy some sausages',
//         TODO_ITEMS[2],
//       ]);
//     });

//     await test.step('Verify changes are persisted in local storage', async () => {
//       await todoPage.checkTodosInLocalStorage('buy some sausages');
//     });
//   });

//   test('should trim entered text', async () => {
//     await test.step('Double-click second item to enter edit mode', async () => {
//       await todoPage.doubleClickNthTodo(1);
//     });

//     await test.step('Enter text with leading and trailing spaces', async () => {
//       const editInput = todoPage.getNthTodoEditInput(1);
//       await editInput.fill('    buy some sausages    ');
//       await editInput.press('Enter');
//     });

//     await test.step('Verify todo text is trimmed', async () => {
//       await todoPage.expectTodoTitles([
//         TODO_ITEMS[0],
//         'buy some sausages',
//         TODO_ITEMS[2],
//       ]);
//     });

//     await test.step('Verify trimmed text is persisted in local storage', async () => {
//       await todoPage.checkTodosInLocalStorage('buy some sausages');
//     });
//   });

//   test('should remove the item if an empty text string was entered', async () => {
//     await test.step('Double-click second item to enter edit mode', async () => {
//       await todoPage.doubleClickNthTodo(1);
//     });

//     await test.step('Clear the todo text and press Enter', async () => {
//       const editInput = todoPage.getNthTodoEditInput(1);
//       await editInput.fill('');
//       await editInput.press('Enter');
//     });

//     await test.step('Verify item is removed from the list', async () => {
//       await todoPage.expectTodoTitles([
//         TODO_ITEMS[0],
//         TODO_ITEMS[2],
//       ]);
//     });
//   });

//   test('should cancel edits on escape', async () => {
//     await test.step('Double-click second item to enter edit mode', async () => {
//       await todoPage.doubleClickNthTodo(1);
//     });

//     await test.step('Edit the todo text', async () => {
//       const editInput = todoPage.getNthTodoEditInput(1);
//       await editInput.fill('buy some sausages');
//     });

//     await test.step('Press Escape to cancel edits', async () => {
//       const editInput = todoPage.getNthTodoEditInput(1);
//       await editInput.press('Escape');
//     });

//     await test.step('Verify original todo text is preserved', async () => {
//       await todoPage.expectTodoTitles(TODO_ITEMS);
//     });
//   });
// });

// test.describe('Counter', () => {
//   test('should display the current number of todo items', async () => {
//     await test.step('Add first todo item', async () => {
//       await todoPage.addTodo(TODO_ITEMS[0]);
//     });

//     await test.step('Verify counter shows "1"', async () => {
//       await todoPage.expectTodoCountText('1');
//     });

//     await test.step('Add second todo item', async () => {
//       await todoPage.addTodo(TODO_ITEMS[1]);
//     });

//     await test.step('Verify counter shows "2"', async () => {
//       await todoPage.expectTodoCountText('2');
//     });

//     await test.step('Verify todos are persisted in local storage', async () => {
//       await todoPage.checkNumberOfTodosInLocalStorage(2);
//     });
//   });
// });

// test.describe('Clear completed button', () => {
//   test.beforeEach(async () => {
//     await todoPage.addMultipleTodos(TODO_ITEMS);
//   });

//   test('should display the correct text', async ({ page }) => {
//     await test.step('Complete the first todo item', async () => {
//       await page.locator('.todo-list li .toggle').first().check();
//     });

//     await test.step('Verify "Clear completed" button is visible', async () => {
//       await todoPage.expectClearCompletedVisible();
//     });
//   });

//   test('should remove completed items when clicked', async () => {
//     await test.step('Complete the second todo item', async () => {
//       await todoPage.checkNthTodo(1);
//     });

//     await test.step('Click "Clear completed" button', async () => {
//       await todoPage.clearCompleted();
//     });

//     await test.step('Verify only 2 items remain', async () => {
//       await todoPage.expectTodoCount(2);
//     });

//     await test.step('Verify correct items remain in the list', async () => {
//       await todoPage.expectTodoTitles([TODO_ITEMS[0], TODO_ITEMS[2]]);
//     });
//   });

//   test('should be hidden when there are no items that are completed', async ({ page }) => {
//     await test.step('Complete the first todo item', async () => {
//       await page.locator('.todo-list li .toggle').first().check();
//     });

//     await test.step('Click "Clear completed" button', async () => {
//       await todoPage.clearCompleted();
//     });

//     await test.step('Verify "Clear completed" button is hidden', async () => {
//       await todoPage.expectClearCompletedHidden();
//     });
//   });
// });

// test.describe('Persistence', () => {
//   test('should persist its data', async () => {
//     await test.step('Add two todo items', async () => {
//       for (const item of TODO_ITEMS.slice(0, 2)) {
//         await todoPage.addTodo(item);
//       }
//     });

//     await test.step('Complete the first todo item', async () => {
//       await todoPage.checkNthTodo(0);
//     });

//     await test.step('Verify initial state before reload', async () => {
//       await todoPage.expectTodoTitles([TODO_ITEMS[0], TODO_ITEMS[1]]);
//       const firstTodoCheck = todoPage.getNthTodoCheckbox(0);
//       await expect(firstTodoCheck).toBeChecked();
//       await todoPage.expectTodoItemsClasses(['completed', '']);
//     });

//     await test.step('Verify 1 completed item in local storage', async () => {
//       await todoPage.checkNumberOfCompletedTodosInLocalStorage(1);
//     });

//     await test.step('Reload the page', async () => {
//       await todoPage.reload();
//     });

//     await test.step('Verify data persists after reload', async () => {
//       await todoPage.expectTodoTitles([TODO_ITEMS[0], TODO_ITEMS[1]]);
//       const firstTodoCheck = todoPage.getNthTodoCheckbox(0);
//       await expect(firstTodoCheck).toBeChecked();
//       await todoPage.expectTodoItemsClasses(['completed', '']);
//     });
//   });
// });

// test.describe('Routing', () => {
//   test.beforeEach(async () => {
//     await todoPage.addMultipleTodos(TODO_ITEMS);
//     // make sure the app had a chance to save updated todos in storage
//     // before navigating to a new view, otherwise the items can get lost :(
//     // in some frameworks like Durandal
//     await todoPage.checkTodosInLocalStorage(TODO_ITEMS[0]);
//   });

//   test('should allow me to display active items', async () => {
//     await test.step('Complete the second todo item', async () => {
//       await todoPage.checkNthTodo(1);
//     });

//     await test.step('Verify 1 completed item in local storage', async () => {
//       await todoPage.checkNumberOfCompletedTodosInLocalStorage(1);
//     });

//     await test.step('Click "Active" filter', async () => {
//       await todoPage.filterByActive();
//     });

//     await test.step('Verify only active items are displayed', async () => {
//       await todoPage.expectTodoCount(2);
//       await todoPage.expectTodoTitles([TODO_ITEMS[0], TODO_ITEMS[2]]);
//     });
//   });

//   test('should respect the back button', async () => {
//     await test.step('Complete the second todo item', async () => {
//       await todoPage.checkNthTodo(1);
//     });

//     await test.step('Verify 1 completed item in local storage', async () => {
//       await todoPage.checkNumberOfCompletedTodosInLocalStorage(1);
//     });

//     await test.step('Navigate to "All" filter and verify count', async () => {
//       await todoPage.filterByAll();
//       await todoPage.expectTodoCount(3);
//     });

//     await test.step('Navigate to "Active" filter', async () => {
//       await todoPage.filterByActive();
//     });

//     await test.step('Navigate to "Completed" filter', async () => {
//       await todoPage.filterByCompleted();
//     });

//     await test.step('Verify only completed items shown', async () => {
//       await todoPage.expectTodoCount(1);
//     });

//     await test.step('Go back to "Active" filter', async () => {
//       await todoPage.goBack();
//       await todoPage.expectTodoCount(2);
//     });

//     await test.step('Go back to "All" filter', async () => {
//       await todoPage.goBack();
//       await todoPage.expectTodoCount(3);
//     });
//   });

//   test('should allow me to display completed items', async () => {
//     await test.step('Complete the second todo item', async () => {
//       await todoPage.checkNthTodo(1);
//     });

//     await test.step('Verify 1 completed item in local storage', async () => {
//       await todoPage.checkNumberOfCompletedTodosInLocalStorage(1);
//     });

//     await test.step('Click "Completed" filter', async () => {
//       await todoPage.filterByCompleted();
//     });

//     await test.step('Verify only completed items are displayed', async () => {
//       await todoPage.expectTodoCount(1);
//     });
//   });

//   test('should allow me to display all items', async () => {
//     await test.step('Complete the second todo item', async () => {
//       await todoPage.checkNthTodo(1);
//     });

//     await test.step('Verify 1 completed item in local storage', async () => {
//       await todoPage.checkNumberOfCompletedTodosInLocalStorage(1);
//     });

//     await test.step('Navigate through filters', async () => {
//       await todoPage.filterByActive();
//       await todoPage.filterByCompleted();
//       await todoPage.filterByAll();
//     });

//     await test.step('Verify all items are displayed', async () => {
//       await todoPage.expectTodoCount(3);
//     });
//   });

//   test('should highlight the currently applied filter', async () => {
//     await test.step('Verify "All" filter is selected by default', async () => {
//       await todoPage.expectFilterSelected('All');
//     });

//     await test.step('Click "Active" filter and verify it is highlighted', async () => {
//       await todoPage.filterByActive();
//       await todoPage.expectFilterSelected('Active');
//     });

//     await test.step('Click "Completed" filter and verify it is highlighted', async () => {
//       await todoPage.filterByCompleted();
//       await todoPage.expectFilterSelected('Completed');
//     });
//   });
// });
