import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchArtimComponent } from './watch-artim.component';

describe('WatchArtimComponent', () => {
  let component: WatchArtimComponent;
  let fixture: ComponentFixture<WatchArtimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchArtimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchArtimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
