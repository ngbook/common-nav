import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { NestedTreeControl } from '@angular/cdk/tree';

export interface Classification {
    name: string;
    link?: string;
    children?: Classification[];
}

@Component({
    selector: 'main-nav',
    templateUrl: './main-nav.component.html',
    styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );
    classifications: Classification[] = [
        {
            name: '概览',
            link: '#dashboard',
        },
        {
            name: '菜单1',
            children: [
                {name: '子菜单1-1', link: '#link1'},
                {name: '子菜单1-2', link: '#link2'},
                {name: '子菜单1-3', link: '#link3'},
            ]
        },
        {
            name: '菜单2',
            link: '#link2',
            children: [
                {name: '子菜单2-1', link: '#link4'},
                {name: '子菜单2-2', link: '#link5'},
                {name: '子菜单2-3', link: '#link6'},
            ]
        }
    ];
    treeControl = new NestedTreeControl<Classification>(
        node => of(node.children)
    );

    constructor(private breakpointObserver: BreakpointObserver) { }

}
